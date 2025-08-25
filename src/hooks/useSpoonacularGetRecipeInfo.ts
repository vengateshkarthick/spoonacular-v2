import React, { useEffect } from 'react';
import { doGet } from '@service/network';
import api from '@service/api';
import { beautifyURL } from '@utils/network';
import { ApiPromiseCallbacks, IRecipeDetails } from '@utils/type';
import { useFetchStatusContext } from '@hooks/useFetchStatus';


interface IGetRecipeDetailsResponse {
   recipeDetails: IRecipeDetails,
}

function useSpoonacularGetRecipeInfo(id: string, { onError, onSuccess }: ApiPromiseCallbacks) {
    const [recipeDetails, setRecipeDetails] = React.useState<IRecipeDetails | null>(null);
    const { updateStatus } = useFetchStatusContext();
    
    useEffect(() => {
      const handleFetchRecipeInfo = async () => {
        const response = await doGet<IGetRecipeDetailsResponse>(api.app.getRecipeInfoById, {
            params: {
                recipeId: id,
            }
        });

        if (response?.recipeDetails?.id) {
            setRecipeDetails(response.recipeDetails);
        }
      }
      if(id) {
        try {
            setTimeout(() => {
              handleFetchRecipeInfo();
              updateStatus("isSuccess", true);
              onSuccess?.("Success");
            }, 1500);
          } catch (err) {
            console.log(err);
            updateStatus("isError", true);
            onError?.("Unable to fetch recipes!!");
          } finally {
            updateStatus("isLoading", false);
          }
      }
    }, [id])

    return {
        recipeDetails
    }
}

export default useSpoonacularGetRecipeInfo;