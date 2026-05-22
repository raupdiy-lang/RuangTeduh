import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const protectedPaths=["/chat","/settings"];
  if (protectedPaths.some((p)=>req.nextUrl.pathname.startsWith(p))) {
    const hasSession = req.cookies.has("sb-access-token") || req.cookies.has("supabase-auth-token");
    if (!hasSession) return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}
export const config = { matcher: ["/chat/:path*", "/settings/:path*"] };
