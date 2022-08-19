import React, { useState } from "react";
const AddUser = (props) => {
    const [newUserName, setNewUserName] = useState('');
    const [newUserAge, setNewUserAge] = useState('');

    const UserNameHandler = (event) =>{
        setNewUserName(event.target.value);
    }

    const UserAgeHandler = (event) =>{
        setNewUserAge(event.target.value);
    }
    const UserDataHandler = (event) =>{
        event.preventDefault();
        if(newUserName.length === 0){
          props.sendValidTitle();
          return;
        }

        if(newUserAge < 0){
          props.sendValidNumber();
          return;
        }

        const newData = {
            id: Math.random(),
            name: newUserName,
            age: newUserAge,
        }
        props.onAddUser(newData);
    }

  return (
    <div>
      <form onSubmit={UserDataHandler}>
        <label>Username</label>
        <input type="text" onChange={UserNameHandler}></input>
        <label>Age(Year)</label>
        <input type="number" onChange={UserAgeHandler}></input>
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
