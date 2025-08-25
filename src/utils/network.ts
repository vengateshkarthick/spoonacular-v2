import axios, { AxiosInstance } from "axios";

let spoonacularAxiosInstance: AxiosInstance | null = null;
let axiosInstance:AxiosInstance | null = null

export const getSpoonacularNetworkInstance = () => {
    if (!spoonacularAxiosInstance) {
        spoonacularAxiosInstance = axios.create({
            baseURL: 'https://api.spoonacular.com',
        })
        return spoonacularAxiosInstance;
    }

    return spoonacularAxiosInstance;
}

export const getAxiosInstance = () => {
    if (!axiosInstance) {
        axiosInstance = axios.create({});
        return axiosInstance;
    }
    return axiosInstance;
}


export const beautifyURL = (url: string, params: string[])  => {
    let urlWithParams = url;
    for(let i = 0; i < params.length; i++) {
        urlWithParams.replace('{?}', params[i])
    }
    return urlWithParams
}