import React, { useState } from "react";

import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [ID, setID] = useState("");


  const LoginHandler = () => {
    setIsLogin(true);
  };

  const IDHandler = (newID) => {
    setID(newID);
  };

  return (
    <React.Fragment>
      {!isLogin && <Login onLogin={LoginHandler} onID={IDHandler}></Login>}
      {isLogin && <MainPage id={ID}></MainPage>}
    </React.Fragment>
  );
}

export default App;
