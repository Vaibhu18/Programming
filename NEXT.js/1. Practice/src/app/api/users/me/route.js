import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export const POST = async (request) => {
  const userId = await getDataFromToken(request);
  const user = await User.findOne({ _id: userId }).select("-password");
  return NextResponse.json({
    message: "user found",
    data: user,
  });
};
