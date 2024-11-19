import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const getDataFromToken = async (request) => {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) return null;
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    return decodedToken.id;
  } catch (error) {
    return NextResponse.error(error.message);
  }
};
