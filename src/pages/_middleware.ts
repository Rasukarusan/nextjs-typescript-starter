import { NextRequest, NextResponse } from 'next/server'
export function middleware(req: NextRequest) {
  const res = NextResponse.next()
  res.headers.set('X-User-ID', 'yahoo')

  return res
}
