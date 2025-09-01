export interface IFetchStatus {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export interface IFetchStatusContext {
  updateStatus: (key: keyof IFetchStatus, flag: boolean) => void;
  resetStatus: () => void;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export interface IRecipe {
  id?: string | null;
  title?: string | null;
  calories?: string | null;
  image?: string | null;
  imageType?: string | null;
  fat?: string | null;
  protein?: string | null;
}

export interface IAnalyzedInstruction {
  name?: string | null;
  steps?: IStep[] | null;
}

export interface IStep {
  number?: number | null;
  step?: string | null;
  ingredients?: IStepIngredient[] | null;
  equipment?: IStepEquipment[] | null;
  length?: IStepLength | null;
}

export interface IStepIngredient {
  id?: number | null;
  name?: string | null;
  localizedName?: string | null;
  image?: string | null;
}

export interface IStepEquipment {
  id?: number | null;
  name?: string | null;
  localizedName?: string | null;
  image?: string | null;
}

export interface IStepLength {
  number?: number | null;
  unit?: string | null;
}

export interface IExtendedIngredient {
  aisle?: string | null;
  amount?: number | null;
  consistency?: string | null;
  id?: number | null;
  image?: string | null;
  measures?: IMeasures | null;
  meta?: string[] | null;
  name?: string | null;
  original?: string | null;
  originalName?: string | null;
  unit?: string | null;
}

export interface IMeasures {
  metric?: IMeasureUnit | null;
  us?: IMeasureUnit | null;
}

export interface IMeasureUnit {
  amount?: number | null;
  unitLong?: string | null;
  unitShort?: string | null;
}

export interface IRecipeNutritionDetails {
  name?: string | null;
  amount?: number | null;
  unit?: string | null;
  percentOfDailyNeeds?: number | null;
}

export interface IRecipeIngredientDetails {
  id?: number | null;
  name?: string;
  amount?: number | null;
  unit?: string | null;
  nutrients?: IRecipeNutritionDetails[];
}

export interface IRecipeCaloricBreakDown {
  percentProtein?: number | null;
  percentFat?: number | null;
  percentCarbs?: number | null;
}
export interface IRecipeWeightPerServing {
  amount?: null | number;
  unit: string | null;
}

export interface IRecipeDetails {
  id?: number | null;
  title?: string | null;
  image?: string | null;
  imageType?: string | null;
  servings?: number | null;
  readyInMinutes?: number | null;
  cookingMinutes?: number | null;
  preparationMinutes?: number | null;
  license?: string | null;
  sourceName?: string | null;
  sourceUrl?: string | null;
  aggregateLikes?: number | null;
  spoonacularSourceUrl?: string | null;
  healthScore?: number | null;
  spoonacularScore?: number | null;
  pricePerServing?: number | null;
  analyzedInstructions?: IAnalyzedInstruction[] | null;
  cheap?: boolean | null;
  creditsText?: string | null;
  cuisines?: string[] | null;
  dairyFree?: boolean | null;
  diets?: string[] | null;
  gaps?: string | null;
  glutenFree?: boolean | null;
  instructions?: string | null;
  ketogenic?: boolean | null;
  lowFodmap?: boolean | null;
  occasions?: string[] | null;
  sustainable?: boolean | null;
  vegan?: boolean | null;
  vegetarian?: boolean | null;
  veryHealthy?: boolean | null;
  veryPopular?: boolean | null;
  whole30?: boolean | null;
  weightWatcherSmartPoints?: number | null;
  dishTypes?: string[] | null;
  extendedIngredients?: IExtendedIngredient[] | null;
  summary?: string | null;
  nutrition?: {
    nutrients?: IRecipeNutritionDetails[];
    properties?: IRecipeNutritionDetails[];
    flavonoids?: IRecipeNutritionDetails[];
    ingredients?: IRecipeIngredientDetails[];
    caloricBreakdown?: IRecipeCaloricBreakDown;
    weightPerServing?: IRecipeWeightPerServing;
  };
}

export interface ApiPromiseCallbacks {
  onSuccess?: (message?: string) => void;
  onError?: (message?: string) => void;
}

export interface IAutoCompleteResults {
  id: number;
  title: string;
  imageType: string;
}

export interface IAutoCompleteContext {
  searchText: string;
  setSearchText: (query:string) => void;
  isLoading: boolean;
  autoCompleteResults: IAutoCompleteResults[];
  canShowResults: boolean;
  setCanShowResults: (canShow: boolean) => void;
}