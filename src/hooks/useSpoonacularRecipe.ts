import api from "@/service/api";
import { useFetchStatusContext } from "@hooks/useFetchStatus";
import { useEffect, useState, useDeferredValue } from "react";
import { IRecipe } from "@utils/type";
import { doGet } from "@/service/network";

interface IGetRecipeResponse {
  offset: number;
  totalResults: number;
  number: number;
  results?: IRecipe[];
}

function useSpoonacularRecipe({
  onError,
  onSuccess,
}: {
  onSuccess?: (message?: string) => void;
  onError?: (message?: string) => void;
}) {
  const [searchRecipeTitle, setSearchRecipeTitle] = useState<string>("");
  const deferredSearchTitle = useDeferredValue(searchRecipeTitle);
  const [recipe, setRecipe] = useState<IRecipe[] | null>(null);
  const { updateStatus } = useFetchStatusContext();

  useEffect(() => {
    const handleFetchRecipe = async () => {
      const response = await doGet<IGetRecipeResponse>(api.getRecipe, {
        params: {
          dish_name: searchRecipeTitle,
          maxLimit: 100,
        },
      });
      if (response && response?.results?.length) {
        setRecipe(() => response?.results ?? []);
      }
    };

    if (deferredSearchTitle) {
      updateStatus("isLoading", true);
      try {
        setTimeout(() => {
          handleFetchRecipe();
          updateStatus("isSuccess", true);
          onSuccess?.("Success");
        }, 1000);
      } catch (err) {
        console.log(err);
        updateStatus("isError", true);
        onError?.("Unable to fetch recipes!!");
      } finally {
        updateStatus("isLoading", false);
      }
    }
  }, [deferredSearchTitle]);

  return {
    recipe,
    setSearchRecipeTitle,
    searchRecipeTitle
  };
}

export default useSpoonacularRecipe;
