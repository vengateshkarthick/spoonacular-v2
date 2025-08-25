import { useEffect, useState, useDeferredValue } from "react";
import { useFetchStatusContext } from "@hooks/useFetchStatus";
import { ApiPromiseCallbacks, IRecipe } from "@utils/type";
import { EDietaryPreference } from "@utils/enum"; 
import api from "@service/api";
import { doGet } from "@service/network";

interface IGetRecipeResponse {
  offset: number;
  totalResults: number;
  number: number;
  results?: IRecipe[];
}

function useSpoonacularRecipe({
  onError,
  onSuccess,
}: ApiPromiseCallbacks) {
  const [searchRecipeTitle, setSearchRecipeTitle] = useState<string>("");
  const deferredSearchTitle = useDeferredValue(searchRecipeTitle);
  const [dietVariant, setDietVariant] = useState<EDietaryPreference>(EDietaryPreference.Vegetarian)
  const [recipe, setRecipe] = useState<IRecipe[] | null>(null);
  const { updateStatus } = useFetchStatusContext();

  useEffect(() => {
    const handleFetchRecipe = async () => {
      const response = await doGet<IGetRecipeResponse>(api.app.getRecipe, {
        params: {
          dish_name: searchRecipeTitle,
          maxLimit: 100,
          dietVariant,
        },
      });
      if (response && response?.results?.length) {
        setRecipe(() => response?.results ?? []);
      }
    };

    if (deferredSearchTitle && dietVariant) {
      updateStatus("isLoading", true);
      try {
        setTimeout(() => {
          handleFetchRecipe();
          updateStatus("isSuccess", true);
          onSuccess?.("Success");
        }, 1600);
      } catch (err) {
        console.log(err);
        updateStatus("isError", true);
        onError?.("Unable to fetch recipes!!");
      } 
    }
  }, [deferredSearchTitle, dietVariant]);

  return {
    recipe,
    setSearchRecipeTitle,
    searchRecipeTitle,
    setDietVariant,
  };
}

export default useSpoonacularRecipe;
