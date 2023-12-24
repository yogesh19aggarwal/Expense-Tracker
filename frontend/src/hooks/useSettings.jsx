import { useContext } from "react";
import SettingContext from "../context/SettingContext";

const useSettings = () => {
  const settings = useContext(SettingContext);
  return settings;
};

export default useSettings;
