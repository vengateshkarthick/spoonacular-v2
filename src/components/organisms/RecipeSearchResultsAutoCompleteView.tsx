"use client";

import React, { useEffect, useMemo } from "react";
import { useSpoonacularAutoCompeteSearch } from "@/hooks/useSpoonacularAutoCompleteSearch";
import { SearchBar } from "../molecules/SearchBar";
import ListView from "@molecules/ListIView";
import AutoCompleteProvider from "@context/AutoCompleteProvider";

interface IRecipeSearchResultsAutoCompleteView {
  onSearch: (query: string) => void;
  initialValue: string;
  isFetchingResults: boolean;
  canShowAutoCompleteResults: boolean;
}

function RecipeSearchResultsAutoCompleteView({
  onSearch,
  initialValue,
  isFetchingResults,
  canShowAutoCompleteResults,
}: IRecipeSearchResultsAutoCompleteView) {
  const {
    searchText,
    setCanShowResults,
    setSearchText,
    autoCompleteResults,
    isLoading,
    canShowResults,
  } = useSpoonacularAutoCompeteSearch();

  useEffect(() => {
    if (initialValue) {
      setSearchText(initialValue);
    }
  }, [initialValue]);

  useEffect(() => {
    if (!canShowAutoCompleteResults) {
      setCanShowResults(false);
    }
  }, [canShowAutoCompleteResults]);

  const formattedListItems = useMemo(
    () =>
      autoCompleteResults?.map((results) => ({
        id: results.id.toString(),
        text: results.title,
        onClick: () => onSearch(results.title),
      })),
    [autoCompleteResults]
  );

  return (
    <div className="flex flex-col justify-start items-start h-full w-full">
      <SearchBar
        initialValue={searchText}
        isLoading={isLoading || isFetchingResults}
        placeholder="Search the delicious recipe..."
        onSearch={setSearchText}
        className="w-full"
        label="Search any recipe "
        inputClassName="mt-1"
      />
      <div className="relative w-full h-full">
        {canShowResults && (
          <ListView
            lists={formattedListItems}
            listContainerClassName="absolute z-20 w-full border-t-0 rounded-tl-none rounded-tr-none shadow-xl"
          />
        )}
      </div>
    </div>
  );
}

export default function (props: IRecipeSearchResultsAutoCompleteView) {
  return (
    <AutoCompleteProvider>
      <RecipeSearchResultsAutoCompleteView {...props} />
    </AutoCompleteProvider>
  );
}
