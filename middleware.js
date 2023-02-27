// middleware.ts
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const response = NextResponse.next()
  response.headers.set('X-Flag-Header', 'john');
  // const basicAuth = req.headers.get('authorization')
  // console.log("before auth")
  // if (basicAuth) {
  //   const auth = basicAuth.split(' ')[1]
  //   const decoder = new TextDecoder();
  //   const decoded = decoder.decode(Uint8Array.from(atob(auth), c => c.charCodeAt(0)));
  //   const [user, pwd] = decoded.toString().split(':')
  //   if (user === 'mydmin' && pwd === 'mypassword') {
  //     console.log("auth")
  //     return NextResponse.next()
  //   }
  // }
  // return new Response('Auth required', {
  //   status: 401,
  //   headers: {
  //     'WWW-Authenticate': 'Basic realm="Secure Area"',
  //   },
  // })
  return response;

}

  // export const config = {
  //   matcher: "/"
  // }
  // const response = NextResponse.next()
  // response.headers.set('X-Flag-Header', 'my value');
  // return response;