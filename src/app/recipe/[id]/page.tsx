import React from "react";
import { Typography } from "@atoms/Typography";
import RecipeInfoView from "@templates/RecipeInfoView";

export async function RecipeDetailsView({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col h-full w-full justify-start items-start gap-8">
      <RecipeInfoView recipeId={id} />
    </div>
  );
}

export default RecipeDetailsView;
