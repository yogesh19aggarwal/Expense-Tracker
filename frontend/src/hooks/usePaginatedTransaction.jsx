import { useEffect, useState } from "react";
import { getAllTransactions } from "../api/transactions.api";
import { getSevenDaysBeforeDate } from "../helpers/DatesHelper";
const usePaginatedTransaction = () => {
  const [skip, setSkip] = useState(0);
  const [searchForm, setSearchForm] = useState({
    filter: "",
    startDate: getSevenDaysBeforeDate(new Date()).toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
  });
  const onChangeSearchFormField = (e) => {
    setSearchForm({
      ...searchForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const [transactions, setTransactions] = useState([]);
  const [status, setStatus] = useState("loading");
  const [showLoadMore, setShowLoadMore] = useState(true);
  useEffect(() => {
    transactionsFetch("normal")();
  }, [skip]);
  const transactionsFetch = (state) => {
    return async () => {
      setStatus("loading");
      try {
        const { data } = await getAllTransactions({
          filter: searchForm.filter,
          endDate: searchForm.endDate,
          startDate: searchForm.startDate,
          skip,
        });
        setShowLoadMore(
          data.data.transactions.length + transactions.length < data.data.count
        );
        if (state === "searched") {
          setTransactions(data.data.transactions);
        } else {
          setTransactions([...transactions, ...data.data.transactions]);
        }
        setStatus("success");
      } catch (error) {
        setStatus("failure");
      }
    };
  };
  const onIncrementSkip = () => {
    setSkip((prev) => prev + 10);
  };
  const onClickSearch = async () => {
    setSkip(0);
    setTransactions([]);
    await transactionsFetch("searched")();
  };
  return {
    skip,
    onIncrementSkip,
    status,
    transactions,
    showLoadMore,
    searchForm,
    onChangeSearchFormField,
    onClickSearch,
  };
};

export default usePaginatedTransaction;
