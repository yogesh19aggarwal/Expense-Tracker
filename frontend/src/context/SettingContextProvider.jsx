import { useEffect } from "react";
import useSettingsForm from "../hooks/useSettingsForm";
import SettingContext from "./SettingContext";
import { getUserSetting } from "../api/setting.api";
import useAuth from "../hooks/useAuth";

export default function SettingContextProvider({ children }) {
  const { settings, onSetSettings } = useSettingsForm();
  const auth = useAuth();
  const userId = auth.user ? auth.user._id : null;
  useEffect(() => {
    (async () => {
      const { data } = await getUserSetting();
      onSetSettings(data.data);
    })();
  }, [userId]);

  return (
    <SettingContext.Provider
      value={{
        settings,
        onSetSettings,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
}
