import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import countryCodes from "../../../assets/currency.json";
import { updateSetting } from "../../api/setting.api";
import useSettings from "../../hooks/useSettings";
import MainSectionContainer from "../common/MainSectionContainer";
import LogoutBtn from "./LogoutBtn";
import "./SettingsPage.css";
import Instruction from "../common/Instruction";

const SettingsPage = () => {
  const settingContext = useSettings();
  const settings = settingContext.settings;
  const countryCode = settings ? settings.countryCode : "IN";
  const currencyCode = settings ? settings.currencyCode : "INR";
  const onChangeCurrencyCode = async (e) => {
    try {
      const [countryCode, currencyCode] = e.currentTarget.value.split(":");
      if (settings && settingContext.onSetSettings) {
        const { data } = await updateSetting(settings._id, {
          countryCode,
          currencyCode,
        });
        settingContext.onSetSettings(data.data);
      }
      toast.success("Setting updated");
    } catch (error) {
      toast.error(
        isAxiosError(error) ? error.response.data.message : "Some error occured"
      );
    }
  };
  const instruction = " Update your settings here and navigate to dashboard.";
  return (
    <MainSectionContainer>
      <div className="setting__btnsWrapper">
        <LogoutBtn />
      </div>
      <h2>Settings</h2>
      <Instruction text={instruction} />
      {settings ? (
        <div className="settings__form">
          <select
            value={`${countryCode}:${currencyCode}`}
            onChange={onChangeCurrencyCode}
            className="settings__currency"
            name="currencyCode"
            id="currencyCode"
          >
            {countryCodes.map((countryCode) => (
              <option
                value={`${countryCode.CountryCode}:${countryCode.Code}`}
                key={`${countryCode.CountryCode}:${countryCode.Code}:${countryCode.Country}`}
              >{`${countryCode.Country} : ${countryCode.Currency} - ${countryCode.Code}`}</option>
            ))}
          </select>
        </div>
      ) : null}
    </MainSectionContainer>
  );
};

export default SettingsPage;
