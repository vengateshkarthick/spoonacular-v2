import React from "react";
import { motion  } from "framer-motion";
import Image from "next/image";
import { Typography } from "../atoms/Typography";
import { CheckBadgeIcon, ClockIcon, StarIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import { fadeEffect } from "@/utils/variants";

interface IRecipeInfoImageCard {
  imageURl: string;
  title: string;
  duration: number;
  dietList: string[];
  score: number;
  likes: number;
}

const renderDietList = (dietList: string[]) => (
  <div className="flex gap-2 flex-col justify-start items-start">
    <Typography level={6} className="font-medium underline underline-offset-4 text-emerald-700">
      Diets
    </Typography>
    <div className="grid grid-cols-3 gap-2">
      {dietList?.map((diet) => (
        <div className="flex gap-1 justify-start items-center" key={diet}>
          <CheckBadgeIcon className="h-8 w-8 text-black/75 stroke-2" />
          <Typography level={6} className="capitalize">
            {diet}
          </Typography>
        </div>
      ))}
    </div>
  </div>
);

const renderDuration = (value: number | string) => (
  <div className="flex gap-2 flex-col justify-start items-start">
    <Typography level={6} className="font-medium underline underline-offset-4 text-emerald-700">
      Duration
    </Typography>
     <div className="flex justify-start items-center gap-2">
      <ClockIcon className="h-8 w-8 text-zinc-800" />
      <Typography level={6}>{value}</Typography>
     </div>
  </div>
);

const renderLikes = (value: number | string) => (
  <div className="flex gap-2 flex-col justify-start items-start">
    <Typography level={6} className="font-medium underline underline-offset-4 text-emerald-700">
      Likes
    </Typography>
     <div className="flex justify-start items-center gap-2">
      <HandThumbUpIcon className="h-8 w-8 text-zinc-800" />
      <Typography level={6}>{value}</Typography>
     </div>
  </div>
);


const renderScore = (value: number | string) => (
  <div className="flex gap-2 flex-col justify-start items-start">
    <Typography level={6} className="font-medium underline underline-offset-4 text-emerald-700">
      Overall score
    </Typography>
    <div className="flex justify-start items-center gap-2">
      <StarIcon className="h-8 w-8 text-zinc-800 " />
      <Typography level={6}>{value}</Typography>
     </div>
  </div>
);

function RecipeInfoImageCard({
  imageURl,
  title,
  duration,
  dietList,
  score,
  likes,
}: IRecipeInfoImageCard) {
  return (
    <motion.div 
      variants={fadeEffect}
      initial="hidden"
      animate="visible"
      className="flex justify-between gap-2 md:gap-4 items-start w-full bg-white  border rounded-2xl p-4 md:p-8">
      <Image
        src={imageURl || "/illustrations/fallback.jpeg"}
        height={200}
        width={280}
        alt="polished recipe pic"
        className="object-contain border-2 opacity-85 rounded-xl"
      />
      <div className="w-full flex flex-col gap-4 md:gap-8 justify-start items-start overflow-hidden">
        <Typography
          level={4}
          className="font-semibold text-black overflow-hidden"
        >
          {title}
        </Typography>
        <div className="flex justify-between gap-4 w-full">
          {renderLikes(likes)}
          {renderDuration(duration)}
          {renderScore(Math.floor(score))}
          {renderDietList(dietList)}
        </div>
      </div>
    </motion.div>
  );
}

export default RecipeInfoImageCard;
