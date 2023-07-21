import "./ExpenseDate.css";

// function ExpenseDate(props) {
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year"> {year} </div>
      <div className="expense-date_day"> {date} </div>
    </div>
  );
};
export default ExpenseDate;
