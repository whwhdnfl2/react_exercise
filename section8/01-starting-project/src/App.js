import React, { useState } from "react";

import "./components/Users/AddUser";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";


function App() {

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

  return (
    <div>
      <AddUser onAddUser={UserDataHandler} ></AddUser>
      <UserList sendData={isUserData}></UserList>;
    
    </div>
  );
}

export default App;
