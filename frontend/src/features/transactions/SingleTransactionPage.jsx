import { Link, useNavigate, useParams } from "react-router-dom";
import useTransaction from "../../hooks/useTransaction";
import MainSectionContainer from "../common/MainSectionContainer";
import FullLoader from "../common/Fullloader";
import "./SingleTransactionPage.css";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import {
  categoriesSelectOptions,
  getCategoryIcon,
} from "../../helpers/CategoriesSelect";
import FloatingAddButton from "../dashboard/FloatingAddButton";
import { deleteTransaction } from "../../api/transactions.api";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
const SingleTransactionPage = () => {
  const { transactionId = "" } = useParams();
  const { transaction, status } = useTransaction({ transactionId });
  const loading = status === "loading";
  const renderIcon = () => {
    const Icon = transaction ? getCategoryIcon(transaction.category) : null;
    return Icon ? <Icon size={40} /> : null;
  };
  const categoryName = transaction
    ? categoriesSelectOptions[transaction.type][transaction.category]
    : null;
  const navigate = useNavigate();
  const onEditTransaction = () => {
    navigate(`/transactions/${transaction._id}/edit`);
  };
  const onDeleteTransaction = async () => {
    try {
      if (!transactionId) {
        return;
      }
      const { data } = await deleteTransaction(transaction._id);
      toast.info(data.message);
      navigate("/transactions");
    } catch (error) {
      toast.error(
        isAxiosError(error) ? error.response.data.message : "Some error occured"
      );
    }
  };
  const renderPlusOrMinus = () => {
    const TRENDING_SIZE = 20;
    return transaction.type === "expense" ? (
      <IoMdTrendingDown size={TRENDING_SIZE} color="red" />
    ) : (
      <IoMdTrendingUp size={TRENDING_SIZE} color="green" />
    );
  };
  if (loading) {
    return <FullLoader />;
  }
  return (
    <MainSectionContainer>
      {transaction ? (
        <div className="single">
          <div className="transac__btns">
            <button onClick={onDeleteTransaction} className="transac__btnD">
              {" "}
              <MdDelete /> Delete
            </button>
            <button onClick={onEditTransaction} className="transac__btnE">
              {" "}
              <CiEdit /> Edit
            </button>
          </div>
          {renderIcon()}
          <h2>{transaction.title}</h2>
          <p>{transaction.description}</p>
          <p className="single__type">
            Type : {transaction.type} {renderPlusOrMinus()}
          </p>
          {categoryName ? <p>Category : {categoryName}</p> : null}
          <p>
            Transaction Done on :{" "}
            {new Date(transaction.date).toISOString().split("T")[0]}
          </p>
        </div>
      ) : (
        <div className="single__notFound">
          <h1>Transaction was removed</h1>
          <FcMoneyTransfer size={300} />
          <Link to={"/transactions"}>All Transactions</Link>
        </div>
      )}
      <FloatingAddButton />
    </MainSectionContainer>
  );
};

export default SingleTransactionPage;
