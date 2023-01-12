import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { ExpenseType } from "./types/expenseTypes";

const DUMMY_EXPENSES: ExpenseType[] = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 5, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 3,
    date: new Date(2021, 9, 28),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 854.67,
    date: new Date(2021, 12, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: ExpenseType) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesData={expenses} />
    </div>
  );
}

export default App;
