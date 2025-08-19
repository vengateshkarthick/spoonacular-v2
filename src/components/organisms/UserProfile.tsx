"use client";

import { UserProfile as ClerkUserProfile } from "@clerk/nextjs";

export function UserProfile() {
  return (
    <div className="w-full mx-auto">
      <ClerkUserProfile />
    </div>
  );
} 