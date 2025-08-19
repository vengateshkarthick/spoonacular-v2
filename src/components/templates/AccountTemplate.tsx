import { ReactNode } from "react";
import { Card } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";
import ArrowLeftIcon from "@heroicons/react/24/outline/ArrowPathIcon";

interface AccountTemplateProps {
  title: string;
  children: ReactNode;
}

export function AccountTemplate({ title, children }: AccountTemplateProps) {
  return (
    <div className="w-full flex items-center justify-start flex-wrap px-4 sm:px-8 md:px-16" style={{ fontFamily: '--font-poppins'}}>
      <Typography level={6} variant="primary" className="text-center text-gray-600 py-4 w-max flex items-center gap-4">
        {title}  <ArrowLeftIcon className="w-5 h-5" />
      </Typography>
      <div className="w-full mx-auto">
        {children}
      </div>
    </div>
  );
}
