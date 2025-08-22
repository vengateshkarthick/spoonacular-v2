"use client";

import React from "react";
import { ExploreRecipesCarousel } from "@templates/ExploreRecipesCarousel";

export default function RecipePage() {
  return (
    <div className="flex flex-col w-full justify-start items-start gap-2 h-max">
      <ExploreRecipesCarousel />
    </div>
  );
}
