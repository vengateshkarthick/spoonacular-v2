import api from "@/utils/api";
import { getSpoonacularNetworkInstance } from "@/utils/network";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const dish_name = searchParams.get("dish_name");
  const maxLimit = searchParams.get("maxLimit");
  try {
    if (!dish_name || !maxLimit) {
      throw new Error("Payload is missing");
    }

    if (!process.env.SPOONACULAR_API_KEY) {
      throw new Error("Forbidden authorization token required");
    }

    const params = new URLSearchParams({
      query: dish_name,
      maxLimit,
      apiKey: process.env.SPOONACULAR_API_KEY!,
    });

    const spoonHttpRequest = getSpoonacularNetworkInstance();
    const response = await spoonHttpRequest.get(
      `${api.complexSearch}?${params.toString()}`,
      {
        headers: {},
      }
    );

    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    return NextResponse.error();
  }
}
