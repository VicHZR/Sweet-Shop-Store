import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('dulce_session')?.value;
  const { pathname } = request.nextUrl;

  if ((pathname.startsWith('/admin') || pathname.startsWith('/api/upload')) && pathname !== '/admin/login') {
    if (!token || token !== process.env.AUTH_SECRET) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (pathname === '/admin/login' && token === process.env.AUTH_SECRET) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/upload/:path*'],
};
