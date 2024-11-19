import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect();

export const GET = async (request) => {
  const reponse = NextResponse.json({
    message: "Logout successfully",
    success: true,
  });

  reponse.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return reponse;
};
