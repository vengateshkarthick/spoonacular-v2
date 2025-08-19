"use client";

import { UserButton } from "@clerk/nextjs";
import { Card } from "../atoms/Card";
import { Typography } from "../atoms/Typography";

interface UserAvatarProps {
  username?: string;
}

export function UserAvatar({ username }: UserAvatarProps) {
  return (
    <Card variant="hover" className="flex items-center gap-3 p-1">
      <UserButton afterSignOutUrl="/" />
      {username && (
        <Typography level={6} className="!text-sm font-medium text-gray-700">
          {username}
        </Typography>
      )}
    </Card>
  );
} 