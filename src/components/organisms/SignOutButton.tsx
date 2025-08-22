"use client";

import { SignOutButton as ClerckSignOutButton } from "@clerk/nextjs";
import { Button } from "@atoms/Button";
import { Typography } from "@atoms/Typography";

export function SignOutButton() {
  return (
    <ClerckSignOutButton>
      <Button
        variant="primary"
        className="px-8 font-medium shadow-lg hover:shadow-xl transition-shadow"
      >
        <Typography level={6} className="text-center text-inherit">
          Logout
        </Typography>
      </Button>
    </ClerckSignOutButton>
  );
}
