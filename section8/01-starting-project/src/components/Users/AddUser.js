import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserAge, setNewUserAge] = useState("");
  const [error, setError] = useState();

  const UserNameHandler = (event) => {
    setNewUserName(event.target.value);
  };

  const UserAgeHandler = (event) => {
    setNewUserAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (newUserName.trim().length === 0 || newUserAge.trim().length === 0) {
      setError({
        title: "no1",
        message: "no1",
      });
      return;
    }

    if (+newUserAge < 1) {
      setError({
        title: "no2",
        message: "no2",
      });
      return;
    }

    const newData = {
      id: Math.random(),
      name: newUserName,
      age: newUserAge,
    };
    props.onAddUser(newData);
    setNewUserName("");
    setNewUserAge("");

  };

  const setErrorGood =() =>{
    setError(null);
  }

  return (
    <React.Fragment>
      {error && <ErrorModal onSetErrorGood={setErrorGood} title={error.title} message={error.message}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={newUserName}
            type="text"
            onChange={UserNameHandler}
          ></input>
          <label htmlFor="age">Age(Year)</label>
          <input
            id="age"
            value={newUserAge}
            type="number"
            onChange={UserAgeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
