import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Configuration pour forcer l'encodage UTF-8

const isPublicRoute = createRouteMatcher([
  '/',
  '/cart(.*)',
  '/success(.*)',
  '/product(.*)',
  '/api/cart-total(.*)',
  '/api/resend/contact(.*)',
  '/404(.*)',
  '/legal-notice(.*)',
  '/privacy-policy(.*)',
  '/terms(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  const response = NextResponse.next()

  
  if (!isPublicRoute(req)) {
    const signInAbs = new URL("/sign-in", req.nextUrl.origin).toString();
    await auth.protect({ unauthenticatedUrl: signInAbs });
  }
  
  return response
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
