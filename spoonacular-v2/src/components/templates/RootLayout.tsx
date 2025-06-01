import { ReactNode } from "react";
import { UserAvatar } from "../molecules/UserAvatar";

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">FeedFood</h1>
          <UserAvatar />
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} FeedFood. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 