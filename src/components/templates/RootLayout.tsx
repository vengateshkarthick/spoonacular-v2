import { ReactNode } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Typography } from "@atoms/Typography";
import { NavMenu } from "@organisms/NavMenu";
import { LoggedOutTemplate } from "@/components/templates/LoggedOutTemplate";

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Typography level={4} className="text-emerald-700 font-semibold">
            Feed Food{" "}
          </Typography>
          <NavMenu />
        </div>
      </header>
      <main className="h-[calc(100% - 30vh)] my-8 overflow-y-auto">
        <SignedOut>
          <LoggedOutTemplate />
        </SignedOut>
        <SignedIn>{children}</SignedIn>
      </main>
      <footer className="bg-white border-t fixed bottom-0 w-full">
        <div className="container mx-auto px-4 py-6">
          <Typography level={6} className="text-center text-gray-600">
            © {new Date().getFullYear()} FeedFood. All rights reserved.
          </Typography>
        </div>
      </footer>
    </div>
  );
}
