import { SignInForm } from "@/components/organisms/SignInForm";
import { AuthTemplate } from "@/components/templates/AuthTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Recipe App",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <AuthTemplate>
      <SignInForm />
    </AuthTemplate>
  );
} 