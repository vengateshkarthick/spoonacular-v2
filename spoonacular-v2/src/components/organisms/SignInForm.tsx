'use client';

import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContainer } from "@/components/molecules/AuthContainer";

export function SignInForm() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const error = searchParams.get("error");
    if (error) {
      toast.error("Authentication failed. Please try again.");
    }
  }, [searchParams]);

  return (
    <AuthContainer title="Welcome Back">
      <SignIn redirectUrl="/" signUpUrl="/sign-up" />
      <Toaster position="top-right" />
    </AuthContainer>
  );
} 