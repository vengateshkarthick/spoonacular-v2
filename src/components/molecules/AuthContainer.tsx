import { ReactNode } from "react";
import { Card } from "@atoms/Card";
import { Typography } from "@atoms/Typography";
import Image from "next/image";

interface AuthContainerProps {
  title: string;
  children: ReactNode;
  icon?: string;
}

export function AuthContainer({ title, children, icon }: AuthContainerProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="flex flex-col items-center gap-4">
          {icon && (
            <div className="relative w-16 h-16">
              <Image
                src={icon}
                alt={`${title} icon`}
                fill
                priority
                className="object-contain"
              />
            </div>
          )}
          <Typography level={2} variant="primary" className="text-center">
            {title}
          </Typography>
        </div>
        <div className="font-poppins">
          {children}
        </div>
      </Card>
    </div>
  );
} 