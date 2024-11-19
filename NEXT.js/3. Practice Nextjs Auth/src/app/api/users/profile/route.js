import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export const POST = async (request) => {
  const userId = await getDataFromToken(request);
  if (!userId)
    return NextResponse.json({ error: "unauthorised access" }, { status: 401 });
  const user = await User.findOne({ _id: userId }).select("-password");
  return NextResponse.json({
    message: "user found",
    data: user,
  });
};
