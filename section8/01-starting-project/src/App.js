import React, { useState } from "react";
import "./components/Users/AddUser";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import NoTitle from "./components/Users/NoTitle";
import NoNumber from "./components/Users/NoNumber";

function App() {
  const [isValid, setIsValid] = useState(1);

  const SetNormal = () => {
    setIsValid(1);
  };

  const SetNoTitle = () => {
    setIsValid(2);
  };

  const SetNoNumber = () =>{
    setIsValid(3);
  }

  const userData = [
    { id: "e1", name: "Max", age: 25 },
    { id: "e2", name: "Good", age: 23 },
  ];

  const [isUserData, setIsUserData] = useState(userData);

  const UserDataHandler = (newData) => {
    setIsUserData((prevData) => {
      return [...prevData, newData];
    });
  };

  let editing1 = <NoNumber sendTrue={SetNormal}></NoNumber>;
  let editing2 = "";

  if (isValid === 2) {
    editing1 = <NoTitle sendTrue={SetNormal}></NoTitle>;
    editing2 = "";
  }

  if (isValid === 1) {
    editing1 = (
      <AddUser onAddUser={UserDataHandler} sendValidTitle={SetNoTitle} sendValidNumber={SetNoNumber}></AddUser>
    );
    editing2 = <UserList sendData={isUserData}></UserList>;
  }
  return (
    <div>
      {editing1}
      {editing2}
    </div>
  );
}

export default App;
