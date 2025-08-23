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
