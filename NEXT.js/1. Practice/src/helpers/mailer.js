import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          VerifyToken: hashedToken,
          VerifyTokenExpiry: Date.now() + 3600000,
        },
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        },
      });
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    let transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "12161ae8b32f6d",
        pass: "2e815c398efcba",
      },
    });

    const mainOption = {
      from: "vcode.dev18@gmail.com",
      to: email,
      subject:
        emailType == "VERIFY" ? "Verify your email" : "Reset your password",
      html: ` <p> Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}"> here </a> to ${
        emailType === "VERIFY" ? "Verify your email" : "reset your password"
      } or copy and paste the link in your browser. <br /> ${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken} </p>`, // html body
    };

    const emailResponse = await transport.sendMail(mainOption);
  } catch (error) {
    throw new Error(error.message);
  }
};
