import api from "@/service/api";
import { beautifyURL, getSpoonacularNetworkInstance } from "@/utils/network";
import { autoCompleteRecipeSearch, cacheRecipes } from "@utils/recipes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const searchDish = searchParams.get("searchDish");
  try {
    if (!searchDish) {
      throw new Error("Incorrect formation of payload !!");
    }

    if (!process.env.SPOONACULAR_API_KEY) {
      throw new Error("Forbidden authorization token required");
    }

    const params = new URLSearchParams({
      query: searchDish,
      number: "10",
      apiKey: process.env.SPOONACULAR_API_KEY,
    });

    const spoonHttpRequest = getSpoonacularNetworkInstance();
    const response = {data: {
        results: [] as any,
    }}
    // const response = await spoonHttpRequest.get(
    //   `${api.spoonacular.autoCompleteSearchDetails}?${params.toString()}`,
    //   {
    //     headers: {},
    //   }
    // );
    // if suppose the spoonacular api doesn't return any.
    if (!response.data?.results?.length) {
        response.data.results = autoCompleteRecipeSearch;
    }
    return NextResponse.json(response.data, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.error();
  }
}
