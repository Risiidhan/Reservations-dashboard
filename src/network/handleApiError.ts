import axios from "axios";
import { IApiResponse } from "./IApiResponse";

export const handleApiError = (error: unknown): IApiResponse => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return {
        success: false,
        message: error.response.data?.message || 'Something went wrong with the response.',
      };
    }
    return { success: false, message: 'No response from server.' };
  }

  return { success: false, message: 'Unexpected error occurred.' };
};