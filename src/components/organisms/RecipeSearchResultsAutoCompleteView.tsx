"use client";

import React, { useEffect, useMemo } from "react";
import { useSpoonacularAutoCompeteSearch } from "@hooks/useSpoonacularAutoCompleteSearch";
import { SearchBar } from "@molecules/SearchBar";
import ListView from "@molecules/ListIView";
import AutoCompleteProvider from "@context/AutoCompleteProvider";
import { useFetchStatusContext } from "@hooks/useFetchStatus";

interface IRecipeSearchResultsAutoCompleteView {
  onSearch: (query: string) => void;
  initialValue: string;
}

function RecipeSearchResultsAutoCompleteView({
  onSearch,
  initialValue,
}: IRecipeSearchResultsAutoCompleteView) {
  const {
    searchText,
    setCanShowResults,
    setSearchTextWithDebounceEffect,
    autoCompleteResults,
    isFetchingSearchResults,
    canShowResults,
  } = useSpoonacularAutoCompeteSearch();


  const {isLoading } = useFetchStatusContext();

  useEffect(() => {
    if(isLoading && canShowResults) {
      setCanShowResults(false);
    }
  }, [isLoading, canShowResults])

  useEffect(() => {
    if (initialValue) {
      setSearchTextWithDebounceEffect(initialValue);
    }
  }, [initialValue]);




  const formattedListItems = useMemo(
    () =>
      autoCompleteResults?.map((results) => ({
        id: results.id.toString(),
        text: results.title,
        onClick: () => {
          onSearch(results.title);
        },
      })),
    [autoCompleteResults]
  );

  return (
    <div className="flex flex-col justify-start items-start h-full w-full">
      <SearchBar
        initialValue={searchText}
        isLoading={isFetchingSearchResults}
        placeholder="Search the delicious recipe..."
        onSearch={setSearchTextWithDebounceEffect}
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
