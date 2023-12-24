import instance from "./instance";

export const createNewTransaction = (transaction) => {
  return instance.post("/api/v1/transactions", transaction);
};

export const updateTransaction = (transaction, transactionId) => {
  return instance.patch(`/api/v1/transactions/${transactionId}`, transaction);
};

export const getTransaction = (transactionId) => {
  return instance.get(`/api/v1/transactions/${transactionId}`);
};
export const getAllTransactions = ({
  filter = "",
  skip = 0,
  startDate,
  endDate,
}) => {
  const params = {
    filter,
    skip,
    startDate,
    endDate,
  };
  return instance.get(`/api/v1/transactions`, {
    params,
  });
};

export const getTransactionsDashboard = () => {
  return instance.get("/api/v1/transactions/dashboard");
};

export const deleteTransaction = (transactionId) => {
  return instance.delete(`/api/v1/transactions/${transactionId}`);
};
