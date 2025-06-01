"use client";

import { UserButton } from "@clerk/nextjs";
import { Card } from "../atoms/Card";

interface UserAvatarProps {
  username?: string;
}

export function UserAvatar({ username }: UserAvatarProps) {
  return (
    <Card variant="hover" className="flex items-center gap-3 p-3">
      <UserButton afterSignOutUrl="/" />
      {username && (
        <span className="text-sm font-medium text-gray-700">
          {username}
        </span>
      )}
    </Card>
  );
} 