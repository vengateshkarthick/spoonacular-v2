import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { Card } from "../atoms/Card";
import Image from "next/image";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-2xl p-8 space-y-6 text-center">
        <div className="relative w-full h-64">
          <Image
            src="/illustrations/not-found.svg"
            alt="Page not found illustration"
            fill
            priority
            className="object-contain"
          />
        </div>
        
        <Typography level={1} variant="primary" className="text-4xl">
          404
        </Typography>
        
        <Typography level={2} variant="secondary">
          Page Not Found
        </Typography>
        
        <p className="text-gray-600">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>

        <div className="flex justify-center">
          <Link href="/">
            <Button variant="primary">
              Return Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
} 