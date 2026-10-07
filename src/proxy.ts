import { NextResponse, type NextRequest } from "next/server";
import { isLocale, site } from "@/config/site";

const PUBLIC_FILE = /\.(?:ico|png|jpg|jpeg|svg|webp|gif|txt|xml|json|woff2?|ttf|map)$/;

function pickLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return site.defaultLocale;
  const parts = acceptLanguage
    .split(",")
    .map((p) => p.trim().split(";")[0])
    .filter(Boolean) as string[];
  for (const p of parts) {
    const short = p.toLowerCase().slice(0, 2);
    if (isLocale(short)) return short;
  }
  return site.defaultLocale;
}

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/ingest") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split("/")[1];
  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const locale = pickLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/|api/|ingest/|.*\\..*).*)"],
};
