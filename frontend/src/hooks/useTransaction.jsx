import { useEffect, useState } from "react";
import { getTransaction } from "../api/transactions.api";

const useTransaction = ({ onSetEditTransaction, transactionId }) => {
  const [transaction, setTransaction] = useState(null);
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    (async () => {
      if (transactionId) {
        try {
          setStatus("loading");
          const { data } = await getTransaction(transactionId);
          setTransaction(data.data);
          if (onSetEditTransaction) {
            onSetEditTransaction(data.data);
          }
          setStatus("success");
        } catch (error) {
          setStatus("failure");
          setTransaction(null);
        }
      } else {
        setTransaction(null);
        setStatus("idle");
        if (onSetEditTransaction) {
          onSetEditTransaction({
            _id: undefined,
            amount: "0",
            date: new Date(Date.now()).toISOString().split("T")[0],
            title: "",
            description: "",
            category: "miscellaneous",
            type: "expense",
          });
        }
      }
    })();
  }, []);
  return { transaction, status };
};

export default useTransaction;
