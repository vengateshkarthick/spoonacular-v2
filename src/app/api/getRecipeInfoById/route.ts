import api from "@/service/api";
import { beautifyURL, getSpoonacularNetworkInstance } from "@/utils/network";
import { cacheRecipes } from "@utils/recipes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const recipeId = searchParams.get("recipeId");
  try {
    if (!recipeId) {
      throw new Error("Recipe id is missing");
    }

    if (!process.env.SPOONACULAR_API_KEY) {
      throw new Error("Forbidden authorization token required");
    }

    const params = new URLSearchParams({
      includeNutrition: "true",
      apiKey: process.env.SPOONACULAR_API_KEY,
    });

    const spoonHttpRequest = getSpoonacularNetworkInstance();
    const recipeByIdURL = beautifyURL(api.spoonacular.getRecipeInfoById, [recipeId])
    const response = await spoonHttpRequest.get(
      `${recipeByIdURL}?${params.toString()}`,
      {
        headers: {},
      }
    );
    // if suppose the spoonacular api doesn't return any.
    if (!response?.data) {
        response.data = {}
    }
    return NextResponse.json(response.data, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.error();
  }
}
