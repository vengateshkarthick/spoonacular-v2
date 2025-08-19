import { HomePage } from "@/app/home/page";
import { Poppins } from "next/font/google";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Spoonacular - Recipe App",
  description: "Discover and manage your favorite recipes",
};

export default function Home() {
  return (
    <div className={`${poppins.className} bg-white h-full w-full`}>
      <HomePage />
    </div>
  );
}
