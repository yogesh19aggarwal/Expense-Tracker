import { useEffect, useRef } from "react";
import "./AmountField.css";
import useSettings from "../../hooks/useSettings";
const AmountField = ({ amount, onChangeTransaction }) => {
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const settingsContext = useSettings();
  const settings = settingsContext.settings || { currencyCode: "INR" };
  const onFocusAmount = (state) => {
    return () => {
      if (divRef.current) {
        divRef.current.style.border =
          state === "focusin" ? "2px solid purple" : "2px solid lightgrey";
      }
    };
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("focusin", onFocusAmount("focusin"));
      inputRef.current.addEventListener("focusout", onFocusAmount("focusout"));
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener(
          "focusin",
          onFocusAmount("focusin")
        );
        inputRef.current.removeEventListener(
          "focusout",
          onFocusAmount("focusout")
        );
      }
    };
  }, []);
  return (
    <div ref={divRef} className="amount__field">
      <span className="amount__currency">{settings.currencyCode}</span>
      <input
        ref={inputRef}
        value={amount}
        onChange={onChangeTransaction}
        type="number"
        placeholder="0.00"
        name="amount"
        autoComplete="false"
      />
    </div>
  );
};

export default AmountField;
