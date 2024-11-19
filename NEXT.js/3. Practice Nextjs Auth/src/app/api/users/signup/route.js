import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export const POST = async (NextRequest) => {
  try {
    const reqBody = await NextRequest.json();
    const { userName, email, password } = reqBody;

    const user = await User.findOne({ email });
    if (user)
      return NextResponse.json(
        { error: "user already exists" },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ userName, email, password: hashedPassword });

    const savedUser = await newUser.save();
    console.log("app/api/user/signup : ", savedUser);

    // send verification email
   const some = await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });
   console.log(true)

    return NextResponse.json(
      {
        message: "user registered successfully",
        success: true,
        savedUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({error: error.message }, { status: 500 });
  }
};
