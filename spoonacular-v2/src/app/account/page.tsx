import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserProfile } from "@/components/organisms/UserProfile";
import { AccountTemplate } from "@/components/templates/AccountTemplate";

export default async function AccountPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in?redirect_url=/account");
  }

  return (
    <AccountTemplate title="Account Management">
      <div className="space-y-8">
        <UserProfile />
      </div>
    </AccountTemplate>
  );
} 