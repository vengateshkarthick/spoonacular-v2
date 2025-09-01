"use client";

import React from "react";
import { ExploreRecipesCarousel } from "@templates/ExploreRecipesCarousel";
import { AlertToast, notify } from "@molecules/AlertToast";
import { RecipesLists } from "@templates/RecipesLists";
import ExportRecipeShimmerLoader from "@templates/ExploreRecipeShimmerLoader";
import { FetchStatusProvider } from "@context/FetchStatusProvider";
import useSpoonacularRecipe from "@hooks/useSpoonacularRecipe";
import { useFetchStatusContext } from "@hooks/useFetchStatus";
import { SearchBar } from "@molecules/SearchBar";
import { Dropdown } from "@molecules/Dropdown";
import { dietOptions } from "@utils/recipes";
import { EDietaryPreference } from "@utils/enum";
import RecipeSearchResultsAutoCompleteView from "../organisms/RecipeSearchResultsAutoCompleteView";

export function ExploreRecipes() {
  const { setSearchRecipeTitle, recipe, searchRecipeTitle, setDietVariant } =
    useSpoonacularRecipe({
      onError: notify.error,
      onSuccess: notify.success,
    });
  const { isLoading, isSuccess } = useFetchStatusContext();
  return (
    <div className="flex flex-col h-full w-full justify-start items-start gap-8">
      <AlertToast />
      <div className="flex justify-between items-center gap-2 w-full">
        <Dropdown
          onSelect={(selectedDiet) =>
            setDietVariant(selectedDiet.toLowerCase() as EDietaryPreference)
          }
          options={dietOptions}
          label="Choose your diet"
        />
        <RecipeSearchResultsAutoCompleteView
          initialValue={searchRecipeTitle}
          isFetchingResults={isLoading}
          onSearch={setSearchRecipeTitle}
          canShowAutoCompleteResults={!isSuccess}
        />
      </div>
      <ExploreRecipesCarousel
        handleRecipe={(recipeName) =>
          setSearchRecipeTitle(
            () => recipeName[0].toUpperCase() + recipeName.slice(1)
          )
        }
      />

      <div className="flex justify-start items-center gap-8 flex-wrap pb-8 h-max w-full">
        {isLoading && <ExportRecipeShimmerLoader />}
        {isSuccess && <RecipesLists recipes={recipe} />}
      </div>
    </div>
  );
}

export default function ExploreRecipesProvider() {
  return (
    <FetchStatusProvider>
      <ExploreRecipes />
    </FetchStatusProvider>
  );
}
