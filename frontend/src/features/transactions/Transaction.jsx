import { useNavigate } from "react-router-dom";
import {
  categoriesSelectOptions,
  getCategoryIcon,
} from "../../helpers/CategoriesSelect";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
import "./Transaction.css";
const Transaction = ({ transaction }) => {
  const renderIcon = () => {
    const Icon = getCategoryIcon(transaction.category);
    return <Icon size={30} />;
  };
  const renderPlusOrMinus = () => {
    const TRENDING_SIZE = 20;
    return transaction.type === "expense" ? (
      <IoMdTrendingDown size={TRENDING_SIZE} />
    ) : (
      <IoMdTrendingUp size={TRENDING_SIZE} />
    );
  };
  const categoryName =
    categoriesSelectOptions[transaction.type][transaction.category];
  const navigate = useNavigate();
  const onClickTransaction = () => {
    navigate(`/transactions/${transaction._id}`);
  };
  return (
    <li
      onClick={onClickTransaction}
      key={transaction._id}
      className="transaction"
    >
      <div>
        <div className={`transac__catIcon_${transaction.type}`}>
          {renderIcon()}
        </div>
      </div>
      <div className="transac__title">
        <p>{transaction.title}</p>
        <p className="transac__description">{categoryName}</p>
      </div>
      <div className="transac__amount">
        <span className={transaction.type}>{renderPlusOrMinus()}</span>
        <p> $ {transaction.amount}</p>
      </div>
    </li>
  );
};

export default Transaction;
