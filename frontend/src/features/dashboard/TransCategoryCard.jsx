import {
  categoriesSelectOptions,
  getCategoryIcon,
} from "../../helpers/CategoriesSelect";
import useSettings from "../../hooks/useSettings";
import CategoryCardProgress from "./CategoryCardProgress";
import "./TransCategoryCard.css";
export default function TransCategoryCard({ category, expense, totalExpense }) {
  const renderIcon = () => {
    const Icon = getCategoryIcon(category);
    return <Icon size={50} />;
  };
  const categoryName = categoriesSelectOptions.expense[category];
  const settingsContext = useSettings();
  const settings = settingsContext.settings || { currencyCode: "INR" };
  return (
    <li className="category__cardWrapper">
      <div className="category__card">
        <span className="category__head">
          {renderIcon()}
          <span>{categoryName}</span>
        </span>
        <span className="category__expense">
          {settings.currencyCode} {expense}
        </span>
      </div>
      <div className="category__expensePercentage">
        <CategoryCardProgress totalExpense={totalExpense} expense={expense} />
      </div>
    </li>
  );
}
