"use client"
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@utils/cn";
import useSearch from "@hooks/useSearch";
import { Poppins } from "next/font/google";

interface SearchBarProps {
  onSearch: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  debounceMs?: number;
  isLoading?: boolean;
  initialValue?:string;
}


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export function SearchBar({
  onSearch,
  placeholder = "Search...",
  className = "",
  inputClassName = "",
  debounceMs = 2000,
  isLoading = false,
  initialValue = ''
}: SearchBarProps) {
  
  const { handleChange, handleClear, searchTerm } = useSearch(onSearch, debounceMs, initialValue);

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative">
        <MagnifyingGlassIcon 
          className={cn(
            "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600"
          )} 
        />
        
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          name="searchRecipeInput"
          className={cn(
            "h-10 w-full text-gray-800 font-medium rounded-md border border-gray-400 bg-white pl-9 pr-12 py-6 text-sm md:text-base outline-none placeholder:text-gray-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4",
            "disabled:cursor-not-allowed disabled:opacity-50",
            poppins.className,
            inputClassName
          )}
        />

        <div className={cn("absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2")}>
          {isLoading && (
            <div className={cn("animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-blue-700")} />
          )}
          
          {searchTerm && (
            <button
              onClick={handleClear}
              className={cn(
                "cursor-pointer rounded-sm p-0.5 hover:bg-gray-200 text-gray-600 transition-colors",
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