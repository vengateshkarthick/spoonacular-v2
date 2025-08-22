"use client";

import { SignInButton as ClreckSignInButton } from "@clerk/nextjs";
import { Button } from "@atoms/Button";
import { Typography } from "@atoms/Typography";

export function SignInButton() {
  return (
    <ClreckSignInButton mode="modal">
      <Button
        variant="primary"
        onClick={() => {}}
        className="px-8 font-medium shadow-lg hover:shadow-xl transition-shadow"
      >
        <Typography level={6} className="text-center text-inherit">
          SignIn
        </Typography>
      </Button>
    </ClreckSignInButton>
  );
}
