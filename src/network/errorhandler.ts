import axios from "axios";


export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return error.response.data?.message || 'Something went wrong with the response.';
    }
    return 'No response from server.';
  }
  return 'Unexpected error occurred.';
};
