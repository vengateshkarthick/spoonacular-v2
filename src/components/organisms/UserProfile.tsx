"use client";

import { UserProfile as ClerkUserProfile } from "@clerk/nextjs";

export function UserProfile() {
  return (
    <div className="max-w-3xl mx-auto">
      <ClerkUserProfile />
    </div>
  );
} 