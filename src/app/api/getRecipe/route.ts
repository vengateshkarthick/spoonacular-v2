import api from "@/service/api";
import { beautifyURL, getSpoonacularNetworkInstance } from "@/utils/network";
import { cacheRecipes } from "@utils/recipes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const dish_name = searchParams.get("dish_name");
  const maxLimit = searchParams.get("maxLimit");
  const dietVariant = searchParams.get("dietVariant");
  try {
    if (!dish_name || !maxLimit || !dietVariant) {
      throw new Error("Incorrect formation of payload !!");
    }

    if (!process.env.SPOONACULAR_API_KEY) {
      throw new Error("Forbidden authorization token required");
    }

    const params = new URLSearchParams({
      query: dish_name,
      maxLimit,
      number: maxLimit,
      diet: dietVariant,
      apiKey: process.env.SPOONACULAR_API_KEY,
    });

    const spoonHttpRequest = getSpoonacularNetworkInstance();
    const response = {data: {
        results: [] as any,
    }}
    // const response = await spoonHttpRequest.get(
    //   `${api.spoonacular.complexSearch}?${params.toString()}`,
    //   {
    //     headers: {},
    //   }
    // );
    // if suppose the spoonacular api doesn't return any.
    if (!response.data?.results?.length) {
        response.data = cacheRecipes;
    }
    return NextResponse.json(response.data, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.error();
  }
}
