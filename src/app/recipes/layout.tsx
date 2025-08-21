import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Spoonacular - Recipe App",
    description: "Explore your favorite recipes",
  };
  
export default function RecipePageLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="container mx-auto px-8 py-16 pt-10 h-screen w-full mt-1">
      {children}
    </div>
  );
}


