import { NotFound } from "@/components/templates/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFoundPage() {
  return <NotFound />;
} 