"use client";
import api from "@service/api";
import { doGet } from "@service/network";
import { AutoCompleteContext } from "@hooks/useSpoonacularAutoCompleteSearch";
import { IAutoCompleteResults } from "@utils/type";
import React, { useEffect, useState } from "react";
import { useDebounce } from "@hooks/useDebounce";

interface IAutoCompleteResultsResponse {
  results: IAutoCompleteResults[];
}

export function AutoCompleteProvider({ children }: React.PropsWithChildren) {
  const [searchText, setSearchText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [canShowResults, setCanShowResults] = useState<boolean>(false);
  const handleSearchText = useDebounce(setSearchText, 900);
  const [autoCompleteResults, setAutoCompleteResults] = useState<
    IAutoCompleteResults[]
  >([]);

  useEffect(() => {
    const handleAutoComplete = async () => {
      const response = await doGet<IAutoCompleteResultsResponse>(
        api.app.getMoreRecipes,
        {
          params: {
            searchDish: searchText,
          },
        }
      );

      if (response?.results?.length) {
        setAutoCompleteResults(response.results);
        setCanShowResults(true);
        setIsLoading(false);
      }
    };
    
    if (searchText) {
      setIsLoading(true);
      try {
        handleAutoComplete();
      } catch (err) {
        console.log(err);
      } 
    }
    else {
        setCanShowResults(false);
    }
  }, [searchText]);

  const value = React.useMemo(
    () => ({
      searchText,
      autoCompleteResults,
      setSearchText: handleSearchText,
      isLoading,
      canShowResults,
      setCanShowResults,
    }),
    [searchText, autoCompleteResults, setSearchText, isLoading, canShowResults, setCanShowResults]
  );

  return (
    <AutoCompleteContext.Provider value={value}>
      {children}
    </AutoCompleteContext.Provider>
  );
}


export default AutoCompleteProvider;