import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Protect /admin routes with Basic Auth when ADMIN_USER and ADMIN_PASS are set.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin')) {
    const user = process.env.ADMIN_USER;
    const pass = process.env.ADMIN_PASS;

    // If admin creds are not configured, hide the admin routes.
    if (!user || !pass) {
      return new NextResponse('Not found', { status: 404 });
    }

    const auth = req.headers.get('authorization') || '';
    if (!auth.startsWith('Basic ')) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Admin"' },
      });
    }

    try {
      const encoded = auth.split(' ')[1] || '';
      const decoded = typeof atob === 'function' ? atob(encoded) : Buffer.from(encoded, 'base64').toString();
      const [u, p] = decoded.split(':');
      if (u === user && p === pass) return NextResponse.next();
    } catch (e) {
      // fall through to unauthorized
    }

    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Admin"' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
