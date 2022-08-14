import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const setIsEdtingFalse = () => {
    setIsEditing(false);
  };
  const setIsEdtingTrue = () => {
    setIsEditing(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  let editing = <button onClick={setIsEdtingTrue}>Add new expense</button>;

  if (isEditing === true) {
    editing = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onSetFalse={setIsEdtingFalse}/>;
  }
  return <div className="new-expense">{editing}</div>;
};

export default NewExpense;
