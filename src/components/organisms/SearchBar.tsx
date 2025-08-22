import { ChangeEvent, useCallback, useState } from "react";
import { useDebounce } from "@hooks/useDebounce";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@utils/cn";

interface SearchBarProps {
  onSearch: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  debounceMs?: number;
  isLoading?: boolean;
}

export function SearchBar({
  onSearch,
  placeholder = "Search...",
  className = "",
  inputClassName = "",
  debounceMs = 300,
  isLoading = false,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const debouncedSearch = useDebounce((value: string) => {
    onSearch(value);
  }, debounceMs);

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

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative">
        <MagnifyingGlassIcon 
          className={cn(
            "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
          )} 
        />
        
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          className={cn(
            "h-10 w-full rounded-md border border-gray-200 bg-white pl-9 pr-12 text-sm outline-none placeholder:text-gray-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            inputClassName
          )}
        />

        <div className={cn("absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2")}>
          {isLoading && (
            <div className={cn("animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-primary")} />
          )}
          
          {searchTerm && (
            <button
              onClick={handleClear}
              className={cn(
                "rounded-sm p-0.5 hover:bg-gray-100 text-gray-500 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              )}
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 