import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cn } from "@utils/cn";
import { Typography } from "../atoms/Typography";

interface IDropdownOption {
  label: string;
  value: string;
}

interface IDropdown {
  label: string;
  options: IDropdownOption[];
  onSelect: (value: string) => void;
  error?: boolean;
  inputClassName?: string;
}

export function Dropdown({
  label,
  onSelect,
  options,
  error,
  inputClassName,
}: IDropdown) {
  const fieldId = React.useId();

  return (
    <div className="w-[280px] space-y-2">
      {label && (
        <label htmlFor={fieldId} className="block text-sm font-medium">
          <Typography level={5}>{label}</Typography>
        </label>
      )}

      <div className="relative">
        <select
          id={fieldId}
          className={cn(
            "block h-10 pl-3 pr-10 w-full text-gray-800 font-medium rounded-md border border-gray-400 bg-white text-sm md:text-base outline-none placeholder:text-gray-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            inputClassName
          )}
          onChange={(e) => onSelect?.(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              <Typography level={5}>{option.label}</Typography>
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-1">
          <ChevronDownIcon
            className="h-5 w-5 text-slate-500"
            aria-hidden="true"
          />
        </div>
      </div>

      {error && (
        <Typography level={7} className="text-sm text-red-600 leading-snug">
          {error}
        </Typography>
      )}
    </div>
  );
}



