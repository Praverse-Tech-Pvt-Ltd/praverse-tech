import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CANONICAL_HOST, NON_CANONICAL_HOST } from "@/lib/site";

export function middleware(request: NextRequest) {
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";

  if (host === NON_CANONICAL_HOST) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)",
  ],
};
