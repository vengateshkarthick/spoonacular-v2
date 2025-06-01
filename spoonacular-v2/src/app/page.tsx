import { HomePage } from "@/app/home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spoonacular - Recipe App",
  description: "Discover and manage your favorite recipes",
};

export default function Home() {
  return <HomePage />;
}
