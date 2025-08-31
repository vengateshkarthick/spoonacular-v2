import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@atoms/Typography";
import Accordion from "@molecules/Accordion";
import { IAnalyzedInstruction } from "@utils/type";
import { fadeEffect } from "@utils/variants";
import { FireIcon } from "@heroicons/react/24/outline";

function AnalyzedInstructionsAccordion({ steps }: IAnalyzedInstruction) {
  const formattedSteps = steps?.map(({ number, step }, idx) => ({
    id: number?.toString() ?? idx.toString(),
    title: `Step ${idx + 1}`,
    content: (
      <Typography level={6} className="text-emerald-600">
        {step}
      </Typography>
    ),
  }));

  return (
    <motion.div
      variants={fadeEffect}
      initial="hidden"
      animate="visible"
      className=" flex bg-white  border rounded-2xl  p-4 md:p-8 py-4  flex-col justify-start gap-2 items-start w-full"
    >
      <div className="flex items-center justify-between gap-2 w-max">
        <FireIcon className="h-8 w-8 text-emerald-700" />
        <Typography level={6} className="text-emerald-700 font-semibold ">
          Analyzed Instruction
        </Typography>
      </div>
      {formattedSteps?.length ? (
        <Accordion
          items={formattedSteps}
          accordionTitleClassName="[&>*]:text-emerald-700 py-8"
        />
      ) : (
        <Typography level={5} className="text-gray-800 ">
          Unable to find Instructions
        </Typography>
      )}
    </motion.div>
  );
}

export default AnalyzedInstructionsAccordion;
