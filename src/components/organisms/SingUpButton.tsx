"use client";

import React from "react";
import { SignUpButton as ClerckSignUpButton } from "@clerk/nextjs";
import { Button } from "@atoms/Button";
import { Typography } from "@atoms/Typography";

export function SignUpButton() {
  return (
    <ClerckSignUpButton mode="modal">
      <Button
        variant="outline"
        onClick={() => {}}
        className="px-8 font-medium hover:bg-gray-50 transition-colors"
      >
        <Typography level={6} className="text-center text-inherit">
          Create account
        </Typography>
      </Button>
    </ClerckSignUpButton>
  );
}
