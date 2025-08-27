import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface IProgressBar {
  value: number;
  color?: string;
  className?: string;
}
function ProgressBar({ color = "#10B981", value, className }: IProgressBar) {
  return (
    <motion.section
      className={cn(
        "h-max w-full border rounded-xl bg-zinc-300 overflow-hidden my-1",
        className
      )}
    >
      <motion.div
        initial={{ width: 0, backgroundColor: color }}
        animate={{
          width: `${value}%`,
          transition: {
            ease: "easeInOut",
            delay: 0.5,
            duration: 1.5,
          },
        }}
        className="h-2 w-full rounded-xl"
      />
    </motion.section>
  );
}

export default ProgressBar;
