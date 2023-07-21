import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isediting, setisediting] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    props.onAddExpense(expenseData);
    setisediting(false);
  };
  const starteditingHandler = () => {
    setisediting(true);
  };
  const stopeditingHandler = () => {
    setisediting(false);
  };
  return (
    <div className="new-expense">
      {!isediting && (
        <button onClick={starteditingHandler}> Add New Expense</button>
      )}
      {isediting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopeditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
