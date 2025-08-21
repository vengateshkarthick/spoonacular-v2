import { ReactNode } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Typography } from "../atoms/Typography";
import { NavMenu } from "../organisms/NavMenu";
import { SignedoutTemplate } from "./SignedoutTemplate";


interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Typography level={4} className="text-emerald-700 font-semibold">
            Feed Food{" "}
          </Typography>
          <NavMenu />
        </div>
      </header>
      <main className="flex-grow">
      <SignedOut>
         <SignedoutTemplate />
      </SignedOut>
        <SignedIn>
          {children}
        </SignedIn>
        </main>
      <footer className="bg-white border-t">
        <Typography
          level={6}
          className="container mx-auto px-4 py-6 text-center text-gray-600"
        >
          © {new Date().getFullYear()} FeedFood. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}
