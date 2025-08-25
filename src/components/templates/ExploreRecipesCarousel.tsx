"use client"

import React from "react";
import Image from "next/image";
import { Button } from "@atoms/Button";
import { searchRecipesItemList } from "@utils/recipes";
import Carousel from "@molecules/Carousel";

interface IExploreRecipesCarousel {
  handleRecipe?: (recipeName: string) => void;
}

export function ExploreRecipesCarousel({ handleRecipe }: IExploreRecipesCarousel) {
  return (
    <Carousel
      title="Explore some delicious recipe..."
      items={searchRecipesItemList}
      className="bg-white border rounded-2xl p-4 md:p-8"
      itemWrapperClassName="w-max h-max p-1 flex flex-col gap-y-4"
      render={(item) => {
        return (
          <Button
            variant="ghost"
            className="m-1 p-2 h-max hover:ring-0 hover:shadow-md hover:scale-[1.025] hover:bg-transparent"
            role="button"
            onClick={() => handleRecipe?.(item.title)}
          >
            <Image
              src={item.image}
              width="150"
              height="120"
              className="object-cover bg-transparent"
              alt={`delicious recipes  ${item.title}`}
            />
          </Button>
        );
      }}
    />
  );
}
