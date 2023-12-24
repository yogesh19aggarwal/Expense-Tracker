import usePaginatedTransaction from "../../hooks/usePaginatedTransaction";
import MainSectionContainer from "../common/MainSectionContainer";
import FloatingAddButton from "../dashboard/FloatingAddButton";
import LoadMoreBtn from "./LoadMoreBtn";
import SearchForm from "./SearchForm";
import Transaction from "./Transaction";
import "./TransactionsPage.css";
export default function TransactionsPage() {
  const {
    transactions,
    status,
    onIncrementSkip,
    showLoadMore,
    onClickSearch,
    onChangeSearchFormField,
    searchForm,
  } = usePaginatedTransaction();
  const searchProps = {
    onClickSearch,
    searchForm,
    onChangeSearchFormField,
  };
  const loading = status === "loading";
  return (
    <MainSectionContainer>
      <h2>Transactions</h2>
      <SearchForm loading={loading} searchProps={searchProps} />
      <ul className="transactions">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction._id} />
        ))}
      </ul>
      {showLoadMore && !loading ? (
        <LoadMoreBtn onClickLoadMore={onIncrementSkip} />
      ) : null}
      <FloatingAddButton />
    </MainSectionContainer>
  );
}
