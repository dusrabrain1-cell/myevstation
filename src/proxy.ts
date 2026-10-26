import { NextRequest, NextResponse } from "next/server";

/**
 * Consolidate legacy hostnames on the canonical MyEVStation domain.
 * Preserve the requested path and query string so old links continue to work.
 */
const CANONICAL_HOST = "myevstation.co.in";
const LEGACY_HOSTS = new Set([
  "myevstation.co",
  "www.myevstation.co",
]);

export function proxy(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();

  if (!LEGACY_HOSTS.has(hostname)) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.protocol = "https:";
  destination.hostname = CANONICAL_HOST;
  destination.port = "";

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
