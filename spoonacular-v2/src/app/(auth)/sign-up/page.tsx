import { SignUpForm } from "@/components/organisms/SignUpForm";
import { AuthTemplate } from "@/components/templates/AuthTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Recipe App",
  description: "Create a new account",
};

export default function SignUpPage() {
  return (
    <AuthTemplate>
      <SignUpForm />
    </AuthTemplate>
  );
} 