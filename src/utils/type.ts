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
    id: string;
    title: string;
    calories: string;
    image: string;
    imageType: string;
    fat: string;
    protein: string;
}


export interface IRecipeDetails {
    id: number;
    title: string;
    image: string;
    imageType: string;
    servings: number;
    readyInMinutes: number;
    cookingMinutes: number;
    preparationMinutes: number;
    license: string;
    sourceName: string;
    sourceUrl: string;
    spoonacularSourceUrl: string;
    healthScore: number;
    spoonacularScore: number;
    pricePerServing: number;
    analyzedInstructions: IAnalyzedInstruction[];
    cheap: boolean;
    creditsText: string;
    cuisines: string[];
    dairyFree: boolean;
    diets: string[];
    gaps: string;
    glutenFree: boolean;
    instructions: string;
    ketogenic: boolean;
    lowFodmap: boolean;
    occasions: string[];
    sustainable: boolean;
    vegan: boolean;
    vegetarian: boolean;
    veryHealthy: boolean;
    veryPopular: boolean;
    whole30: boolean;
    weightWatcherSmartPoints: number;
    dishTypes: string[];
    extendedIngredients: IExtendedIngredient[];
    summary: string;
  }
  
  export interface IAnalyzedInstruction {
    name?: string;
    steps?: IStep[];
  }
  
  export interface IStep {
    number: number;
    step: string;
    ingredients?: IStepIngredient[];
    equipment?: IStepEquipment[];
    length?: IStepLength;
  }
  
  export interface IStepIngredient {
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }
  
  export interface IStepEquipment {
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }
  
  export interface IStepLength {
    number: number;
    unit: string;
  }
  

  export interface IExtendedIngredient {
    aisle: string;
    amount: number;
    consistency: string;
    id: number;
    image: string;
    measures: IMeasures;
    meta: string[];
    name: string;
    original: string;
    originalName: string;
    unit: string;
  }
  
  export interface IMeasures {
    metric: IMeasureUnit;
    us: IMeasureUnit;
  }
  
  export interface IMeasureUnit {
    amount: number;
    unitLong: string;
    unitShort: string;
  }
  
  
export interface ApiPromiseCallbacks {
    onSuccess?: (message?: string) => void;
    onError?: (message?: string) => void;
  }