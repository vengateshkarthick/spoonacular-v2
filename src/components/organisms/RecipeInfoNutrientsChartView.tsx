import React from "react";
import { motion } from "framer-motion";
import { InformationCircleIcon, BoltIcon } from "@heroicons/react/24/outline";
import { Typography } from "@atoms/Typography";
import NutrientPieChart from "@molecules/NutrientPieChart";
import TooltipWrapper from "@molecules/TooltipWrapper";
import PaginatedView from "@molecules/PaginatedView";
import { IRecipeNutritionDetails } from "@utils/type";
import { fadeEffect } from "@utils/variants";
import { cn } from "@utils/cn";

export interface IRecipeInfoNutrientsChartView {
  nutrients: IRecipeNutritionDetails[];
  className?: string;
}

const nutritionChartViewRenderer = ({
  name,
  amount,
  percentOfDailyNeeds,
  unit,
}: IRecipeNutritionDetails, index:number) => (
  <div
    className="flex flex-col gap-4 justify-start items-center w-max p-2"
    key={name}
  >
    <NutrientPieChart value={amount ?? 0} color="#9f071290" />
    <div className="flex gap-4 justify-between items-center w-max   text-red-800  rounded-lg px-4 py-1  text-center">
      <Typography level={6} className="font-medium text-red-800">
        {name} &nbsp; ({unit})
      </Typography>
      <TooltipWrapper
        id={`nutrition-vital-${name}`}
        className="ml-auto"
        place={(index + 1) % 4 === 0 ? "bottom-end" : "bottom"}
        variant="info"
        content={
          <Typography level={6} className="text-sm font-normal">
            According to a recent survey a human body needs {percentOfDailyNeeds} ({unit}) 
            of {name} (per day)
          </Typography>
        }
      >
        <InformationCircleIcon className="h-6 !cursor-pointer w-6  ml-auto" />
      </TooltipWrapper>
    </div>
  </div>
);


function RecipeInfoNutrientsChartView({
  nutrients,
  className,
}: IRecipeInfoNutrientsChartView) {
  return (
    <motion.div
      variants={fadeEffect}
      initial="hidden"
      animate="visible"
      className={cn(
        "bg-white flex flex-col justify-between items-start border rounded-2xl p-4 md:p-8 gap-2 w-full py-4",
        className
      )}
    >
      <div className="flex justify-start items-center gap-2">
        <BoltIcon className="h-8  w-8 text-red-800/75" />
        <Typography level={6} className="font-semibold text-red-800 mt-3">
          Micro & Macro Nutrients
        </Typography>
      </div>
      <PaginatedView<IRecipeNutritionDetails>
        items={nutrients}
        offset={4}
        itemWrapperClassName="grid grid-cols sm:grid-cols-2 md:grid-cols-4 place-items-center place-content-center gap-4 py-4"
        prevPageButtonClassName="border-red-800 text-inherit hover:bg-red-800 hover:text- hover:[&>.left-arrow]:text-white [&>.left-arrow]:text-red-800"
        nextPageButtonClassName="border-red-800 text-inherit hover:bg-red-800 hover:text-white  hover:[&>.right-arrow]:text-white [&>.right-arrow]:text-red-800"
        displayPageNumberClassName="text-[#9f071285] [&>.current-page]:text-red-800"
        render={nutritionChartViewRenderer}
      />
    </motion.div>
  );
}

export default RecipeInfoNutrientsChartView;
