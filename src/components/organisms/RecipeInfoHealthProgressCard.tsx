import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { fadeEffect } from "@utils/variants";
import ProgressBar from "@atoms/ProgressBar";
import { EHealthScoreColorIndicator } from "@utils/enum";
import { Typography } from "../atoms/Typography";
import { BeakerIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

interface IRecipeInfoHealthProgressCard {
  healthScore: number;
}

const getHealthScoreIndicator = (healthScore:number) => {
    if (healthScore <= 25) return EHealthScoreColorIndicator.bad;
    if (healthScore <= 75) return EHealthScoreColorIndicator.fine;
    return EHealthScoreColorIndicator.better;
};

function RecipeInfoHealthProgressCard({
  healthScore,
}: IRecipeInfoHealthProgressCard) {
  

  const healthScoreIndicator = useMemo(() => getHealthScoreIndicator(healthScore), [healthScore]);

  return (
    <motion.div
      variants={fadeEffect}
      initial="hidden"
      animate="visible"
      className="bg-white  border rounded-2xl p-4 md:p-8 flex  flex-col justify-start gap-2 items-start w-full py-4"
    >
      <div className="flex justify-start items-center gap-2 w-full pb-2">
        <BeakerIcon className="h-8 w-8 text-black" />
        <Typography level={6} className="font-semibold text-black/75 mt-3">
          Health Score
        </Typography>
        <InformationCircleIcon className="h-6 cursor-pointer w-6 text-black mt-3 ml-auto" />
      </div>
      <div className="grid grid-cols-3 w-full text-left">
        <div className="w-full">
          <Typography
            level={6}
            className="font-semibold"
            style={{ color: EHealthScoreColorIndicator.bad }}
          >
            Bad
          </Typography>
        </div>
        <div className="w-full">
          <Typography
            level={6}
            className="font-semibold"
            style={{ color: EHealthScoreColorIndicator.fine }}
          >
            Fine
          </Typography>
        </div>
        <div className="w-full">
          <Typography
            level={6}
            className="font-semibold"
            style={{ color: EHealthScoreColorIndicator.better }}
          >
            Better
          </Typography>
        </div>
      </div>
      <ProgressBar value={healthScore} color={healthScoreIndicator} />
    </motion.div>
  );
}

export default RecipeInfoHealthProgressCard;
