import { ReactNode } from "react";

interface AuthTemplateProps {
  children: ReactNode;
}

export function AuthTemplate({ children }: AuthTemplateProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      {children}
    </main>
  );
} 