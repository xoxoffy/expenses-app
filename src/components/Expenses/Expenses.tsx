import { FunctionComponent, useState } from "react";
import { ExpenseType } from "../../types/expenseTypes";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";

interface Props {
  expensesData: ExpenseType[];
}

const Expenses: FunctionComponent<Props> = ({ expensesData }) => {
  const [enteredFilter, setEnteredFilter] = useState(2019);

  const filterChangeHandler = (selectedFilter: number) => {
    setEnteredFilter(selectedFilter);
  };

  const filteredExpenses = expensesData.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedFilterYear={enteredFilter}
        filterChangeHandler={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
