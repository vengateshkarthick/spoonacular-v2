"use client";

import { SignUp } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContainer } from "@molecules/AuthContainer";

export function SignUpForm() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const error = searchParams.get("error");
    if (error) {
      toast.error("Sign up failed. Please try again.");
    }
  }, [searchParams]);

  return (
    <AuthContainer title="Sign In with Clerk">
      <SignUp redirectUrl="/" signInUrl="/sign-in" />
      <Toaster position="top-right" />
    </AuthContainer>
  );
} 