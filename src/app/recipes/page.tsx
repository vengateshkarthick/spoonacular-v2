"use client";

import React from "react";
import { ExploreRecipesCarousel } from "@templates/ExploreRecipesCarousel";
import { AlertToast, notify } from "@organisms/AlertToast";
import { RecipesLists } from "@templates/RecipesLists";
import ExportRecipeShimmerLoader from "@templates/ExploreRecipeShimmerLoader";
import { FetchStatusProvider } from "@context/FetchStatusProvider";
import useSpoonacularRecipe from "@hooks/useSpoonacularRecipe";
import { useFetchStatusContext } from "@/hooks/useFetchStatus";
import { SearchBar } from "@/components/organisms/SearchBar";

export function RecipePage() {
  const { setSearchRecipeTitle, recipe, searchRecipeTitle } =
    useSpoonacularRecipe({
      onError: notify.error,
      onSuccess: notify.success,
    });
  const { isLoading, isSuccess } = useFetchStatusContext();
  return (
    <div className="flex flex-col h-full w-full justify-start items-start gap-8">
      <AlertToast />
      <div className="flex justify-between items-center w-full">
        <SearchBar
          initialValue={searchRecipeTitle}
          isLoading={isLoading}
          placeholder="Search the delicious recipe..."
          onSearch={setSearchRecipeTitle}
          className="w-1/2 md:w-3/4"
        />
      </div>
      <ExploreRecipesCarousel
        handleRecipe={(recipeName) => setSearchRecipeTitle(recipeName)}
      />

      <div className="flex justify-start items-center gap-8 flex-wrap pb-8 h-max w-full">
        {isLoading && <ExportRecipeShimmerLoader />}
        {isSuccess && <RecipesLists recipes={recipe} />}
      </div>
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
