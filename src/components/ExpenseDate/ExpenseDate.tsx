import "./ExpenseDate.css";

interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate = ({ date }: ExpenseDateProps) => {
  const month = date.toLocaleString("pl-PL", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("pl-PL", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
