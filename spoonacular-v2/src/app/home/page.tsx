"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";
import Image from "next/image";

export function HomePage() {
  return (
    <div className="container mx-auto py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <SignedIn>
          <Typography level={1} className="text-5xl">
            Welcome Back to FeedFood
          </Typography>
          
          <p className="text-xl text-gray-600">
            Ready to discover new recipes and continue your culinary journey?
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link href="/recipes">
              <Button variant="primary" className="px-8 font-medium shadow-lg hover:shadow-xl transition-shadow">
                Explore Recipes
              </Button>
            </Link>
            <Link href="/account">
              <Button variant="outline" className="px-8 font-medium hover:bg-gray-50 transition-colors">
                Manage Account
              </Button>
            </Link>
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
              
              <Typography level={3} variant="secondary" className="text-xl">
                Discover amazing recipes and manage your meal planning with ease.
              </Typography>

              <div className="flex items-center justify-center gap-4">
                <Link href="/sign-in">
                  <Button variant="primary" className="px-8 font-medium shadow-lg hover:shadow-xl transition-shadow">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button variant="outline" className="px-8 font-medium hover:bg-gray-50 transition-colors">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SignedOut>
      </div>
    </div>
  );
} 