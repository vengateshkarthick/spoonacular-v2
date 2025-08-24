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