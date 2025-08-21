import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Spoonacular - Recipe App",
    description: "Discover and manage your favorite recipes",
  };
  
export default function HomePageLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="container m-auto py-16 pt-10 h-screen mt-1">
      {children}
    </div>
  );
}


