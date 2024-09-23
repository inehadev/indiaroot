import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
 
export  async function middleware(request: NextRequest) {
    const token = await getToken({req:request});
    const url = request.nextUrl
 
 
  if (token && (url.pathname==='/sign-up ' || url.pathname=== '/sign-in' || url.pathname=== '/' || url.pathname.startsWith('/verify'))) {
    return NextResponse.rewrite(new URL('/hero', request.url))
  }
  console.log("middleware is executed");

  return NextResponse.next();


}

export const config ={
   matcher :[
    '/sign-up',
    '/sign-in',
    '/createPost',
    '/verify/:paths*'
   ]
}