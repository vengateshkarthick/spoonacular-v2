import axios, { AxiosAdapter, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

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

export async function doGet<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const axiosInstance = getAxiosInstance();
    const response: AxiosResponse<T> = await axiosInstance.get<T>(url, config);
    return response.data;
}

export async function doPost<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const axiosInstance = getAxiosInstance();
    const response: AxiosResponse<T> = await axiosInstance.post<T>(url, data, config);
    return response.data;
}
  

export async function doPut<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const axiosInstance = getAxiosInstance();
    const response: AxiosResponse<T> = await axiosInstance.put<T>(url, data, config);
    return response.data;
}
  

export async function doDelete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const axiosInstance = getAxiosInstance();
    const response: AxiosResponse<T> = await axiosInstance.delete<T>(url, config);
    return response.data;
}