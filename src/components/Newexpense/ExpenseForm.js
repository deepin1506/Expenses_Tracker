import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titlechangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  // --------------------------------------------------------------------------
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountchangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  // -----------------------------------------------------------------
  const [enteredDate, setEnteredDate] = useState("");
  const datechangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  //-------------------------------------------------------------------
  // inspite of using multiple states we can create a usestate() by passing function through it like

  // const [userInput, setuserInput] = useState({
  //   enteredTitle: "",
  //   enteredamount: "",
  //   entereddate: "",
  // });  
  // const titlechangeHandler = (event) => {
  //   setuserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   });
  // };
  // //-----------------------------------------------------------
  // const amountchangeHandler = (event) => {
  //   setuserInput({
  //     ...userInput,
  //     enteredamount: event.target.value,
  //   });
  // };
  // //------------------------------------------------------
  // const datechangeHandler = (event) => {
  //   setuserInput({
  //     ...userInput,
  //     entereddate: event.target.value,
  //   });
  // };
  // //   -------------------------------------------------------
  // another apporach for not using different kind of handlers
  //   const inputchangeHandler = (identifier, value) => {
  //     if (identifier === "Title") {
  //       setenteredTitle(value);
  //     }
  //     elseif(identifier === 'Amount') {
  //         setenteredamount(value);
  //     }
  //     else {
  //         setentereddate(value);
  //     }
  //   };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input type="text" onChange={(event) => inputchangeHandler('title' , event.target.value)} /> */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titlechangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            //  onChange={(event) => inputchangeHandler('amount' , event.target.value)}
            value={enteredAmount}
            onChange={amountchangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020 - 01 - 01"
            max="2024 - 12 - 31"
            //    onChange={(event) => inputchangeHandler('date' , event.target.value)}
            value={enteredDate}
            onChange={datechangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
