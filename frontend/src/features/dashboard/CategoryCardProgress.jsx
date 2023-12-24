import useSettings from "../../hooks/useSettings";
import "./CategoryCardProgress.css";
const CategoryCardProgress = ({ totalExpense, expense }) => {
  const settingsContext = useSettings();
  const settings = settingsContext.settings || { currencyCode: "INR" };
  const categoryExpensePercentage = ((expense / totalExpense) * 100).toFixed(0);
  const title = `${categoryExpensePercentage}% of ${settings.currencyCode} ${totalExpense}`;
  return (
    <progress
      className="categoryCard"
      id="categoryCard"
      title={title}
      max="100"
      value={categoryExpensePercentage}
    >
      70%
    </progress>
  );
};

export default CategoryCardProgress;
