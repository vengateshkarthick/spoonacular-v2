"use client";

import React from "react";
import { notify } from "@molecules/AlertToast";
import useSpoonacularGetRecipeInfo from "@hooks/useSpoonacularGetRecipeInfo";
import { FetchStatusProvider } from "@context/FetchStatusProvider";
import { useFetchStatusContext } from "@hooks/useFetchStatus";
import RecipeInfoViewShimmerLoader from "@templates/RecipeInfoViewShimmerLoader";
import RecipeInfoImageView from "@/components/templates/RecipeInfoImageView";

function RecipeInfoView({ recipeId }: { recipeId: string }) {
  const { recipeDetails } = useSpoonacularGetRecipeInfo(recipeId, {
    onSuccess: notify.success,
    onError: notify.error,
  });
  return (
    <div className="h-full w-full min-h-1/2  bg-white border rounded-2xl p-4 md:p-8">
      <RecipeInfoImageView 
        title={recipeDetails?.title ?? ''}
        imageURl={recipeDetails?.image ?? ''}
        dietList={recipeDetails?.diets?.length ? recipeDetails.diets : ['diary Free', 'gluten Free']}
        duration={recipeDetails?.preparationMinutes ?? 30}
        score={recipeDetails?.spoonacularScore ?? 40}
        likes={recipeDetails?.aggregateLikes ?? 0}
      />
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
