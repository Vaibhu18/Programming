import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const publicPaths =
    path == "/login" || path == "/signup" || path == "/verifyemail";
  const token = request.cookies.get("token")?.value || "";
  if (publicPaths && token) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }
  if (!publicPaths && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/signup", "/verifyemail", "/profile"],
};
