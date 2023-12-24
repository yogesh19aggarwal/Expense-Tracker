import { Route, Routes } from "react-router-dom";
import AuthPage from "./features/auth";
import LandingPage from "./features/landing";
import "react-toastify/dist/ReactToastify.css";
import DashboardPage from "./features/dashboard";
import TransactionsPage from "./features/transactions";
import TransactionFormPage from "./features/transactions/TransactionFormPage";
import SingleTransactionPage from "./features/transactions/SingleTransactionPage";
import SettingsPage from "./features/settings";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/transactions">
        <Route path="" element={<TransactionsPage />} />
        <Route path="new" element={<TransactionFormPage />} />
        <Route path=":transactionId/edit" element={<TransactionFormPage />} />
        <Route path=":transactionId" element={<SingleTransactionPage />} />
      </Route>
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}
