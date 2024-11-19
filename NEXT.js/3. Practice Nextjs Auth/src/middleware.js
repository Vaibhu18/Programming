import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;
  const publicPath =
    path == "/login" || path == "/signup" || path == "/verifyemail";

  const token = request.cookies.get("token")?.value || "";
  if (token && publicPath)
    return NextResponse.redirect(new URL("/", request.url));
  if (!token && !publicPath)
    return NextResponse.redirect(new URL("/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/verifyemail',
    '/profile'
  ],
};
