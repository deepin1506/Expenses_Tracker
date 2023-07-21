import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import React from "react";

// function ExpenseItem(props) {

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__descirption">
        <h2> {props.title}</h2>
      </div>
      <div className="expense-item__price"> ${props.amount} </div>
    </Card>
  );
};

export default ExpenseItem;
