import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect();

export const GET = async () => {
  try {
    const response = NextResponse.json({
      message: "logout successfully",
      success: true,
    });

    response.cookies.set("token", "", {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
