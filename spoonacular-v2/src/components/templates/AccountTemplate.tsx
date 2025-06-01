import { ReactNode } from "react";
import { Card } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";

interface AccountTemplateProps {
  title: string;
  children: ReactNode;
}

export function AccountTemplate({ title, children }: AccountTemplateProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto p-6 space-y-6">
        <Typography level={1} variant="primary" className="text-center">
          {title}
        </Typography>
        {children}
      </Card>
    </div>
  );
} 