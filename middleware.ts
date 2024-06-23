import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken');

  if(!token) {
    return NextResponse.redirect(new URL('/main/login', req.url));
  }
return NextResponse.next();
}

export const config = {
  matcher: ['/main/my-page',] 
};