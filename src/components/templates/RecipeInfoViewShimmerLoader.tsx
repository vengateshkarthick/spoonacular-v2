import React from "react";
import { ShimmerLoader } from "@atoms/ShimmerLoader";

function RecipeInfoShimmerLoader() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <ShimmerLoader height="h-56" width="1/2" />
      <ShimmerLoader height="h-32" width="1/2" />
      <ShimmerLoader height="h-56" width="1/2" />
      <ShimmerLoader height="h-32" width="1/2" />
    </div>
  );
}

export default RecipeInfoShimmerLoader;
