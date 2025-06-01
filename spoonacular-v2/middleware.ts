import { clerkMiddleware } from "@clerk/nextjs/server";

// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Skip all static files
    "/",                       // Match root route
    "/(api|trpc)(.*)",        // Match API and tRPC routes
  ],
}; 