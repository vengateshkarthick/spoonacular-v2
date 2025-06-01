"use client";

import { SignedIn } from "@clerk/nextjs";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";

interface SignedInButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function SignedInButton({ href, className, children }: SignedInButtonProps) {
  return (
    <SignedIn>
      <Link href={href}>
        <Button 
          variant="primary"
          className={`font-semibold shadow-lg hover:shadow-xl transition-shadow ${className}`}
        >
          {children}
        </Button>
      </Link>
    </SignedIn>
  );
} 