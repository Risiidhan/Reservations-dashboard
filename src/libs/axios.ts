import axiosBase, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { AuthResponse } from "types/auth";
import { getAccessToken, getRefreshToken, setTokens } from "utils/auth";

const refreshExcludedPaths = ["/auth"];

const axios = axiosBase.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const requestHandler = (config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  if (Boolean(token)) config.headers.Authorization = `Bearer ${token}`;

  return config;
};

const responseErrorHandler = async (error: AxiosError) => {
  const _config = error.config;
  const refreshToken = getRefreshToken();

  if (!_config || !Boolean(refreshToken)) return Promise.reject(error);

  const status = error.response?.status;
  const config = { ..._config, refreshAttempted: false };
  const isAuthenticationError = status === 401;
  const isRerfeshAttempted = config.refreshAttempted;
  const isExcluded = refreshExcludedPaths.some((path) => {
    return config.url?.includes(path);
  });

  if (isAuthenticationError && !isRerfeshAttempted && !isExcluded) {
    config.refreshAttempted = true;

    const { data } = await axios.post<AuthResponse>(
      "/auth/refresh",
      refreshToken,
    );
    setTokens(data.token, data.refreshToken);

    return axios(config);
  }

  return Promise.reject(error);
};

axios.interceptors.request.use(requestHandler);
axios.interceptors.response.use(undefined, responseErrorHandler);

export default axios;
