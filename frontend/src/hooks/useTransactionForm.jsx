import { useState } from "react";
import { categoriesSelectOptions } from "../helpers/CategoriesSelect";
import useTransaction from "./useTransaction";
import { useParams } from "react-router-dom";

export default function useTransactionForm() {
  const defaultTransaction = {
    _id: undefined,
    amount: "0",
    date: new Date(Date.now()).toISOString().split("T")[0],
    title: "",
    description: "",
    category: "miscellaneous",
    type: "expense",
  };
  const [transaction, setTransaction] = useState(defaultTransaction);
  const onChangeTransaction = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "type") {
      const category = Object.keys(categoriesSelectOptions[value])[0];
      setTransaction({
        ...transaction,
        [name]: value,
        category,
      });
      return;
    }
    setTransaction({ ...transaction, [name]: value });
  };
  const onSetEditTransaction = (transactionToEdit) => {
    setTransaction({
      ...transactionToEdit,
      date: new Date(transactionToEdit.date).toISOString().split("T")[0],
    });
  };
  const { transactionId = "" } = useParams();
  const { status } = useTransaction({ transactionId, onSetEditTransaction });
  return { transaction, onChangeTransaction, status };
}
