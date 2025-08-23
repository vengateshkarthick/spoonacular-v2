"use client";

import React from "react";
import { ExploreRecipesCarousel } from "@templates/ExploreRecipesCarousel";
import useSpoonacularRecipe from "@hooks/useSpoonacularRecipe";
import { ShimmerLoader } from "@atoms/ShimmerLoader";
import { AlertToast, notify } from "@organisms/AlertToast";
import { useFetchStatusContext } from "@/hooks/useFetchStatus";
import { FetchStatusProvider } from "@/context/FetchStatusProvider";
import ExportRecipeShimmerLoader from "@/components/templates/ExploreRecipeShimmerLoader";

export function RecipePage() {
  const { setSearchRecipeTitle } = useSpoonacularRecipe({
    onError: notify.error,
    onSuccess: notify.success,
  });
  const { isError, isSuccess, isLoading } = useFetchStatusContext();
  const renderShimmerLoader = () => {
    
  };
  console.log({ isError, isSuccess, isLoading }, "from recipe page");
  return (
    <div className="flex flex-col h-full w-full justify-start items-start gap-8">
      <AlertToast />
      <ExploreRecipesCarousel
        handleRecipe={(recipeName) => setSearchRecipeTitle(recipeName)}
      />
      {isLoading && (
        <div className="flex justify-start items-center gap-8 flex-wrap pb-8 h-max w-full">
          <ExportRecipeShimmerLoader />
        </div>
      )}
    </div>
  );
}

export default function RecipePageProvider() {
  return (
    <FetchStatusProvider>
      <RecipePage />
    </FetchStatusProvider>
  );
}
