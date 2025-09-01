import React, { useContext } from "react";
import { IAutoCompleteContext } from "@utils/type";

export const AutoCompleteContext = React.createContext<IAutoCompleteContext>(
  {} as IAutoCompleteContext
);

export function useSpoonacularAutoCompeteSearch() {
  return useContext(AutoCompleteContext);
}
