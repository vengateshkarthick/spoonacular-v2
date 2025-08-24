import React, { useState, useCallback, ChangeEvent, useEffect } from "react";
import { useDebounce } from "@hooks/useDebounce";

function useSearch(
  onSearch: (searchText: string) => void,
  debounceMs: number,
  initialValue: string = ""
) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce((value: string) => {
    if (value === "" || value.length) {
      onSearch(value);
    }
  }, debounceMs);

  useEffect(() => {
    if (initialValue && searchTerm !== initialValue) {
      setSearchTerm(initialValue);
      debouncedSearch(initialValue);
    }
  }, [initialValue]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  const handleClear = useCallback(() => {
    setSearchTerm("");
    onSearch("");
  }, [onSearch]);

  return {
    searchTerm,
    handleClear,
    handleChange,
  };
}

export default useSearch;
