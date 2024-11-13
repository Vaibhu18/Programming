import bcryptjs from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

connect();

export const POST = async (request) => {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log(token);

    const user = await User.findOne({
      VerifyToken: token,
      VerifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }
    console.log(user);
    user.isVarified = true;
    user.VerifyToken = undefined;
    user.VerifyTokenExpiry = undefined;
    await user.save();
    return NextResponse.json(
      {
        message: "email verified successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
