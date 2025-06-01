"use client";

import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";

interface SignedOutButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function SignedOutButton({ href, className, children }: SignedOutButtonProps) {
  return (
    <SignedOut>
      <Link href={href}>
        <Button 
          variant="outline"
          className={`font-semibold hover:bg-gray-50 transition-colors ${className}`}
        >
          {children}
        </Button>
      </Link>
    </SignedOut>
  );
} 