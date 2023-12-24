import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MainSectionContainer from "../common/MainSectionContainer";
import "./DashboardPage.css";
import TransCategoryCard from "./TransCategoryCard";
import TransactionHead from "./TransactionHead";
import WeekExpense from "./WeekExpense";
import FloatingAddButton from "./FloatingAddButton";
import { getTransactionsDashboard } from "../../api/transactions.api";
export default function DashboardPage() {
  const auth = useAuth();
  const name = auth.user ? auth.user.name : undefined;
  const [weeklyReport, setWeeklyReport] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  useEffect(() => {
    (async () => {
      const { data } = await getTransactionsDashboard();
      setWeeklyReport(data.data.weeklyReport);
      setTotalIncome(data.data.totalIncome);
      setTotalExpense(data.data.totalExpense);
    })();
  }, []);
  const sortByCategoryExpense = (reportA, reportB) =>
    reportB.totalExpense - reportA.totalExpense;
  const filterZeroExpenses = (report) => report.totalExpense;
  return (
    <MainSectionContainer>
      <h2 className="dash__name">Hello {name},</h2>
      <WeekExpense totalExpense={totalExpense} totalIncome={totalIncome} />
      <TransactionHead />
      <ul className="dash__transList">
        {weeklyReport
          .filter(filterZeroExpenses)
          .sort(sortByCategoryExpense)
          .map((report) => (
            <TransCategoryCard
              totalExpense={totalExpense}
              category={report.category}
              key={report.category}
              expense={report.totalExpense}
            />
          ))}
      </ul>
      <FloatingAddButton />
    </MainSectionContainer>
  );
}
