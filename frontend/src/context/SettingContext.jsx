import { createContext } from "react";

const SettingContext = createContext({
  settings: null,
  onChangeCurrencyCode: undefined,
  onSetSettings: undefined,
});

export default SettingContext;
