import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isProtectedApi = createRouteMatcher(['/api(.*)']);
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default clerkMiddleware((auth, req) => {
    if (isProtectedApi(req)) {
      auth.protect();
    }
});



export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Skip all static files
    "/",                       // Match root route
    "/(api|trpc)(.*)",        // Match API and tRPC routes
  ],
}; 