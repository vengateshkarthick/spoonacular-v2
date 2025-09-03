import React from "react";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import { Typography } from "@atoms/Typography";
import { fadeEffect } from "@utils/variants";

interface IShowRecipeSummary {
  summary: string;
}

function ShowRecipeSummary({ summary }: IShowRecipeSummary) {
  const sanitizedHtmlString = DOMPurify.sanitize(summary);

  return (
    <motion.div
      variants={fadeEffect}
      initial="hidden"
      animate="visible"
      className="bg-red-100  border rounded-2xl p-4 md:p-8 flex  flex-col justify-start gap-2 items-start w-full py-4"
    >
      <Typography level={5}>
        <div
          className="w-full h-full text-red-900"
          dangerouslySetInnerHTML={{ __html: sanitizedHtmlString }}
        />
      </Typography>
    </motion.div>
  );
}

export default ShowRecipeSummary;
