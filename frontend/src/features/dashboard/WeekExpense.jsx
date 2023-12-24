import useSettings from "../../hooks/useSettings";
import "./WeekExpense.css";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";
export default function WeekExpense({ totalIncome, totalExpense }) {
  const settingsContext = useSettings();
  const settings = settingsContext.settings || { currencyCode: "INR" };
  return (
    <section className="week__expense">
      <h3 className="week__expenseHeading">Weekly Savings</h3>
      <h3 className="week__expAmount">
        {settings.currencyCode} {(totalIncome - totalExpense).toFixed(2)}
      </h3>
      <div className="week__dash">
        <div className="week__dashItem">
          <FaCircleArrowDown color="red" size={30} />
          <span className="we">
            {`${settings.currencyCode} `}
            {totalExpense.toFixed(2)}
          </span>
        </div>
        <div className="week__dashItem">
          <FaCircleArrowUp size={30} color="green" />
          <span>
            {settings.currencyCode} {totalIncome.toFixed(2)}
          </span>
        </div>
      </div>
    </section>
  );
}
