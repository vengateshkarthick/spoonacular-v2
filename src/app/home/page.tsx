"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function HomePage() {
  const router = useRouter();
  return (
    <div className="container m-auto py-16 pt-10 h-screen mt-1">
      <div className="max-w-4xl mx-auto text-center space-y-8 pt-10">
        <SignedIn>
          <Typography level={1} className="text-5xl">
            Welcome Back to FeedFood
          </Typography>

          <Typography level={6} className="text-gray-500 font-normal">
            Ready to discover new recipes and continue your culinary journey?
          </Typography>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="primary"
              className="px-8 font-medium shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => router.push("/recipes")}
            >
              Explore Recipes
            </Button>

            <Button
              variant="outline"
              className="px-8 font-medium hover:bg-gray-50 transition-colors"
              onClick={() => router.push("/account")}
            >
              Manage Account
            </Button>
          </div>
        </SignedIn>

        <SignedOut>
          <div className="space-y-6">
            <div className="relative w-full h-[400px] mb-8">
              <Image
                src="/illustrations/open-window.svg"
                alt="Welcome illustration"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="space-y-4">
              <Typography level={1} variant="primary" className="text-5xl">
                Welcome to FeedFood
              </Typography>

              <Typography level={3} variant="secondary" className="text-base">
                Discover amazing recipes and manage your meal planning with
                ease.
              </Typography>

              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="primary"
                  onClick={() => router.push("/sign-in")}
                  className="px-8 font-medium shadow-lg hover:shadow-xl transition-shadow"
                >
                  Sign In
                </Button>

                <Button
                  variant="outline"
                  onClick={() => router.push("/sign-up")}
                  className="px-8 font-medium hover:bg-gray-50 transition-colors"
                >
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </SignedOut>
      </div>
    </div>
  );
}
