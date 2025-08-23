import api from "@/utils/api";
import { getAxiosInstance } from "@/utils/network";
import { useEffect, useState, useDeferredValue } from "react";
import { useFetchStatusContext } from "@hooks/useFetchStatus";

interface IRecipe {
  id: string;
  title: string;
  calories: string;
  image: string;
  imageType: string;
  fat: string;
  protein: string;
}

interface IGetRecipeResponse {
    offset: number;
    totalResults: number;
    number: number;
    results?: IRecipe[];
}


function useSpoonacularRecipe({ onError, onSuccess }: { onSuccess?: (message?: string ) => void, onError?: (message?: string) => void}) {
  const [searchRecipeTitle, setSearchRecipeTitle] = useState<string>("");
  const deferredSearchTitle = useDeferredValue(searchRecipeTitle);
  const [recipe, setRecipe] = useState<IRecipe[] | null>(null);
  const { updateStatus, resetStatus } = useFetchStatusContext();

  useEffect(() => {

    const handleFetchRecipe = async () => {
      const axiosInstance = getAxiosInstance();
      const response = await axiosInstance.get<IGetRecipeResponse>(api.getRecipe, {
        params: {
            dish_name: searchRecipeTitle,
            maxLimit: 100,
        }
      });
      console.log(response.data)
      if (response.data && response.data?.results?.length) {
        setRecipe(() => response.data?.results ?? []);
        
      }
    };


    if (deferredSearchTitle) {
      updateStatus("isLoading", true);
      try {
        setTimeout(() => {
           handleFetchRecipe();
           updateStatus("isSuccess", true);
           onSuccess?.("Success");
        }, 1000)

      } catch(err) {
        console.log(err)
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
  }
}

export default useSpoonacularRecipe;
