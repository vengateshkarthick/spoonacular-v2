import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserProfile } from "@organisms/UserProfile";
import { AccountTemplate } from "@templates/AccountTemplate";

export default async function AccountPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in?redirect_url=/account");
  }

  return (
    <AccountTemplate title="Profile Management Powered by Clerk">
      <UserProfile />
    </AccountTemplate>
  );
} 