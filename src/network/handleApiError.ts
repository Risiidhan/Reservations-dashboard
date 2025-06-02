import axios from "axios";
import { IApiResponse } from "./IApiResponse";

export const handleApiError = (error: unknown,  translate?: (key: string) => string): IApiResponse => {
  const fallbackMsg = (msg: string) => (translate ? translate(msg) : msg);

  if (axios.isAxiosError(error)) {
    if (error.response) {
         const status = error.response.status;

      const messageByStatus: Record<number, string> = {
        400: fallbackMsg("error.badRequest"),    
        401: fallbackMsg("error.unauthorized"),  
        403: fallbackMsg("error.forbidden"),     
        404: fallbackMsg("error.notFound"),      
        422: fallbackMsg("error.unprocessable"), 
        500: fallbackMsg("error.serverError"),   
      };

      return {
        success: false,
        message:
          messageByStatus[status] ??
          error.response.data?.message ??
          fallbackMsg("error.generic"), 
      };
    }
    return { success: false, message: fallbackMsg("error.noResponse") };
  }

  return { success: false, message: fallbackMsg("error.unexpected") };
};