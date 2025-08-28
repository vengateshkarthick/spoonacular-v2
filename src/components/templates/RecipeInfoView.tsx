"use client";

import React from "react";
import { notify } from "@molecules/AlertToast";
import useSpoonacularGetRecipeInfo from "@hooks/useSpoonacularGetRecipeInfo";
import { FetchStatusProvider } from "@context/FetchStatusProvider";
import RecipeInfoImageCard from "@organisms/RecipeInfoImageCard";
import RecipeInfoHealthProgressCard from "@organisms/RecipeInfoHealthProgressCard";
import { ERecipeInfoDefaultValues } from "@utils/enum";
import RecipeInfoShimmerLoader from "@templates/RecipeInfoViewShimmerLoader";
import RecipeInfoNutrientsCard from "@organisms/RecipeInfoNutrientsCard";

function RecipeInfoView({ recipeId }: { recipeId: string }) {
  const { recipeDetails } = useSpoonacularGetRecipeInfo(recipeId, {
    onSuccess: notify.success,
    onError: notify.error,
  });

  if (!recipeDetails) return <RecipeInfoShimmerLoader />;

  return (
    <div className="flex flex-col gap-8 justify-start items-start h-full w-full min-h-1/2">
      <RecipeInfoImageCard
        title={recipeDetails?.title ?? ""}
        imageURl={recipeDetails?.image ?? ""}
        dietList={
          recipeDetails?.diets?.length
            ? recipeDetails.diets.slice(0, 4)
            : ([
                ERecipeInfoDefaultValues.vegetarian,
                ERecipeInfoDefaultValues.dairyFree,
              ] as string[])
        }
        duration={
          recipeDetails?.preparationMinutes ??
          ERecipeInfoDefaultValues.preparationMinutes
        }
        score={
          recipeDetails?.spoonacularScore ??
          ERecipeInfoDefaultValues.spoonacularScore
        }
        likes={
          recipeDetails?.aggregateLikes ??
          ERecipeInfoDefaultValues.aggregateLikes
        }
      />
      <RecipeInfoHealthProgressCard
        healthScore={
          recipeDetails?.healthScore ?? ERecipeInfoDefaultValues.healthScore
        }
      />
      {recipeDetails?.nutrition?.nutrients && (
        <RecipeInfoNutrientsCard
          nutrients={recipeDetails?.nutrition?.nutrients}
        />
      )}
    </div>
  );
}

export default function RecipeInfoViewProvider({
  recipeId,
}: {
  recipeId: string;
}) {
  return (
    <FetchStatusProvider>
      <RecipeInfoView recipeId={recipeId} />
    </FetchStatusProvider>
  );
}
