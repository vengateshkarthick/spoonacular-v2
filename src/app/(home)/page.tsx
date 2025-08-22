"use client";

import { Button } from "@atoms/Button";
import { Typography } from "@atoms/Typography";
import { useRouter } from "next/navigation";


export default function HomePage() {
  const router = useRouter();
  return (
    <div className="max-w-4xl mx-auto text-center space-y-8 pt-10">
        <Typography level={1} className="text-5xl">
          Welcome Back to FeedFood
        </Typography>

        <Typography level={6} className="text-gray-500 font-normal">
          Ready to discover new recipes and continue your culinary journey?
        </Typography>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="primary"
            className="px-8 font-medium shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => router.push("/recipes")}
          >
            Explore Recipes
          </Button>

          <Button
            variant="outline"
            className="px-8 font-medium hover:bg-gray-50 transition-colors"
            onClick={() => router.push("/account")}
          >
            Manage Account
          </Button>
        </div>

      
    </div>
  );
}

