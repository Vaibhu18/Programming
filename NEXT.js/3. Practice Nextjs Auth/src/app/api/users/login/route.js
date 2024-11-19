import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export const POST = async (NextRequest) => {
  try {
    const reqBody = await NextRequest.json();
    const { email, password } = reqBody;
    console.log("api/users/login : ", reqBody);

    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return NextResponse.json(
        { error: "check your credentials" },
        { status: 400 }
      );

    const tokenData = {
      id: user._id,
      userName: user.userName,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    const response = NextResponse.json(
      {
        message: "Logged in successfully",
        success: true,
      },
      { status: 201 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
