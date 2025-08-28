import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ERecipeInfoColorCode } from "@utils/enum";
import { fadeEffect } from "@utils/variants";
import ProgressBar from "@atoms/ProgressBar";
import { Typography } from "@atoms/Typography";
import { BeakerIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import TooltipWrapper from "@molecules/TooltipWrapper";
import Badge from "@molecules/Badge";

interface IRecipeInfoHealthProgressCard {
  healthScore: number;
}


function RecipeInfoHealthProgressCard({
  healthScore,
}: IRecipeInfoHealthProgressCard) {
  

  return (
    <motion.div
      variants={fadeEffect}
      initial="hidden"
      animate="visible"
      className="bg-white  border rounded-2xl p-4 md:p-8 flex  flex-col justify-start gap-2 items-start w-full py-4"
    >
      <div className="flex justify-start items-center gap-2 w-full pb-2">
        <BeakerIcon className="h-8 w-8 text-emerald-700" />
        <Typography level={6} className="font-semibold text-emerald-700 mt-3">
          Health Score
        </Typography>
        <div className="ml-auto">
          <TooltipWrapper
            id="healthScoreInfo"
            className="ml-auto"
            place="top"
            content={
              <Typography
                level={6}
                className="text-emerald-700 text-sm font-normal"
              >
                Health score is a calculated value from spoonacular based on the
                micro and macro nutrients value present in the dish
              </Typography>
            }
          >
            <InformationCircleIcon className="h-6 cursor-pointer w-6 text-zinc-500 mt-3 ml-auto" />
          </TooltipWrapper>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full text-left">
        <div className="w-full">
          <Badge variant="danger">Bad</Badge>
        </div>
        <div className="w-full">
          <Badge variant="warning">Fine</Badge>
        </div>
        <div className="w-full">
          <Badge variant="success">Better</Badge>
        </div>
      </div>
      <ProgressBar value={healthScore} color={ERecipeInfoColorCode.fine} />
    </motion.div>
  );
}

export default RecipeInfoHealthProgressCard;
