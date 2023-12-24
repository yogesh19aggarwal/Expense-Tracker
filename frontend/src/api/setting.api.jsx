import instance from "./instance";

export const getUserSetting = () => {
  return instance.get("/api/v1/auth/settings");
};

export const updateSetting = (settingId, newSetting) => {
  return instance.patch(`/api/v1/settings/${settingId}`, newSetting);
};
