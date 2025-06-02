import apiClient from './axiosClient';
import { handleApiError } from './handleApiError';
// import { useTranslations } from 'next-intl';
import { AxiosRequestConfig } from 'axios';

export const useApiClient = () => {
  // const translate = useTranslations();
  let translate: ((key: string) => string) | undefined = undefined;

  const get = async <T = unknown>(url: string, config: AxiosRequestConfig = {}) => {
    try {
      const response = await apiClient.get<T>(url, config);
      return { data: response.data };
    } catch (error) {
      const formattedError = handleApiError(error, translate);
      return { data: null, error: formattedError.message };
    }
  };

  const post = async <T = unknown>(url: string, data?: T, config: AxiosRequestConfig = {}) => {
    try {
      const response = await apiClient.post<T>(url, data, config);
      return { data: response.data };
    } catch (error) {
      const formattedError = handleApiError(error, translate);
      return { data: null, error: formattedError.message };
    }
  };

  const put = async <T = unknown>(url: string, data?: T, config: AxiosRequestConfig = {}) => {
    try {
      const response = await apiClient.put<T>(url, data, config);
      return { data: response.data };
    } catch (error) {
      const formattedError = handleApiError(error, translate);
      return { data: null, error: formattedError.message };
    }
  };

  const del = async <T = unknown>(url: string, config: AxiosRequestConfig = {}) => {
    try {
      const response = await apiClient.delete<T>(url, config);
      return { data: response.data };
    } catch (error) {
      const formattedError = handleApiError(error, translate);
      return { data: null, error: formattedError.message };
    }
  };

  return { get, post, put, del };
};
