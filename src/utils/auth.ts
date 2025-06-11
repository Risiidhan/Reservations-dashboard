export const getAccessToken = () => {
  localStorage.getItem("token");
};

export const getRefreshToken = () => {
  localStorage.getItem("refreshToken");
};

export const setAccessToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const setRefreshToken = (token: string) => {
  localStorage.setItem("refreshToken", token);
};

export const setTokens = (token: string, refreshToken: string) => {
  setAccessToken(token);
  setRefreshToken(refreshToken);
};
