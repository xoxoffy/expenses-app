import { FunctionComponent } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm/NewExpenseForm";

interface Props {
  onAddExpense: any;
}

const NewExpense: FunctionComponent<Props> = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
