import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    await connect();
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        },
      });
    } else {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "12161ae8b32f6d",
        pass: "2e815c398efcba",
      },
    });

    const mailOptions = {
      from: "vcode.dev@gmail.com",
      to: email,
      subject:
        emailType == "VERIFY" ? "Verify your email" : "reset your password",
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
          color: #333;
          }
          .container {
          max-width: 600px;
          margin: 30px auto;
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
            }
            .content {
              padding: 20px;
              line-height: 1.6;
              text-align: center;
              }
              .button {
                display: inline-block;
                padding: 10px 20px;
                margin: 20px 0;
                font-size: 16px;
                color: #ffffff;
                background-color: #007bff;
                border-radius: 5px;
                text-decoration: none;
                }
                .footer {
                  margin-top: 30px;
                  font-size: 12px;
                  text-align: center;
                  color: #aaa;
                  }
                  </style>
                  </head>
                  <body>
                  <div class="container">
                  <div class="header">
                  <h1>${
                    emailType === "VERIFY"
                      ? "Email Verification"
                      : "Password Reset"
                  }</h1>
                  </div>
                  <div class="content">
                  <p>${
                    emailType === "VERIFY"
                      ? "Thank you for signing up! Please verify your email to continue."
                      : "We received a request to reset your password. Click the button below to continue."
                  }</p>
                  <a href="${
                    process.env.DOMAIN
                  }/verifyemail?token=${hashedToken}" class="button">${
        emailType === "VERIFY" ? "Verify Email" : "Reset Password"
      }</a>
                  <p>or copy and paste the link below in your browser <br/> 
                  ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
                  </p>
                  <p>If you did not request this, please ignore this email.</p>
                  </div>
                  <div class="footer">
                  <p>&copy; 2024 vcode.dev. All rights reserved.</p>
                  </div>
                  </div>
                  </body>
                  </html>
                  `,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
