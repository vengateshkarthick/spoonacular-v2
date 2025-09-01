import { IFetchStatusContext } from '@utils/type';
import React, { useContext } from 'react';


export const FetchStatusContext = React.createContext({} as IFetchStatusContext);


export function useFetchStatusContext() {
    return useContext(FetchStatusContext);
}
