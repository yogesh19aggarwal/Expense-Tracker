import instance from "./instance";

export const register = (registerUser) => {
  return instance.post("/api/v1/auth/register", registerUser);
};

export const login = (loginUser) => {
  return instance.post("/api/v1/auth/login", loginUser);
};
export const getCurrentUser = () => {
  return instance.get("/api/v1/auth");
};

export const logout = () => {
  return instance.post("/api/v1/auth/logout");
};
