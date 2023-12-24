import { useState } from "react";

const useSettingsForm = () => {
  const [settings, setSettings] = useState(null);

  const onSetSettings = (newSetting) => {
    setSettings(newSetting);
  };
  return { settings, onSetSettings };
};

export default useSettingsForm;