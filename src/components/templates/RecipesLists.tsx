import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IRecipe } from "@utils/type";
import { Typography } from "@atoms/Typography";
import { listEffect, listItemEffectV2 } from "@utils/variants";
import { Button } from "@atoms/Button";
import PaginatedView from "@organisms/PaginatedView";

interface IRecipeLists {
  recipes: Array<IRecipe> | null;
}

export function RecipesLists({ recipes }: IRecipeLists) {
  return (
    <motion.div
      className="h-full w-full min-h-1/2 bg-white border rounded-2xl p-4 md:p-8"
      variants={listEffect}
      initial="hidden"
      animate="visible"
    >
      {recipes && (
        <PaginatedView<IRecipe>
          offset={8}
          itemWrapperClassName="flex justify-start gap-8  items-center flex-wrap"
          items={recipes}
          render={(recipe, idx) => (
            <motion.div
              className="flex group flex-col cursor-pointer peer transition-all duration-300 rounded-2xl p-4 justify-start items-start gap-4 overflow-hidden w-64 hover:ring-0 hover:shadow-2xl hover:scale-[1.025]"
              variants={listItemEffectV2}
              custom={{ itemIdx: idx }}
              initial="hidden"
              animate="visible"
              key={recipe.id}
            >
              <Image
                src={recipe.image}
                height="182"
                width="273"
                alt="recipe"
                className="object-contain border-2 rounded-2xl opacity-80"
              />
              <div className="w-full py-4 space-y-4">
                <Typography
                  level={5}
                  variant="primary"
                  className="font-medium text-left truncate w-full"
                >
                  {recipe.title}
                </Typography>
                <Button
                  variant="outline"
                  className="border-black text-black rounded-none group-hover:bg-black hover:bg-black group-hover:text-white hover:text-white"
                >
                  <Typography level={7} className="text-inherit font-medium">
                    Try it out today
                  </Typography>
                </Button>
              </div>
            </motion.div>
          )}
        />
      )}
    </motion.div>
  );
}
