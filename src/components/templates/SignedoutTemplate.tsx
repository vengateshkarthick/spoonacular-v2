"use client";
import React from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";
import { SignInButton } from "@/components/organisms/SignInButton";
import { SignUpButton } from "@/components/organisms/SingUpButton";

export function SignedoutTemplate() {
  return (
    <div className="space-y-6 w-full">
      <div className="relative w-full h-[400px] mb-8">
        <Image
          src="/illustrations/open-window.svg"
          alt="Welcome illustration"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="space-y-4 w-full mx-auto flex items-center justify-center flex-wrap">
        <Typography
          level={1}
          variant="primary"
          className="text-5xl w-full text-center flex-grow"
        >
          Welcome to FeedFood
        </Typography>

        <Typography
          level={3}
          variant="secondary"
          className="text-base w-full text-center flex-grow"
        >
          Discover amazing recipes and manage your meal planning with ease.
        </Typography>

        <div className="flex items-center justify-center gap-4">
          <SignInButton />
          <SignUpButton />
        </div>
      </div>
    </div>
  );
}
