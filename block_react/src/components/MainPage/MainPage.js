import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import classes from "./MainPage.module.css";
import Button from "@mui/material/Button";

const MainPage = (props) => {
  const [data, setData] = useState("");

  async function fetchMoviesHandler() {
    const response = await fetch("https://swapi.dev/api/films");
    const newData = await response.json();
    setData(newData);
  }

  return (
    <React.Fragment>
      <Card className={classes.index}>
        <p>good</p>
        <p>{props.id}</p>
      </Card>
      <Card className={classes.login}>
        <form /*onSubmit={submitHandler}*/>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input
              type=""
              id="email"
              //   value={emailState.value}
              //   onChange={emailChangeHandler}
              //   onBlur={validateEmailHandler}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              //   value={enteredPassword}
              //   onChange={passwordChangeHandler}
              //   onBlur={validatePasswordHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button
              type="submit"
              className={classes.btn}
              //   disabled={!formIsValid}
            >
              submit
            </Button>
          </div>
        </form>
      </Card>
      <Button onClick={fetchMoviesHandler}>submit</Button>
      <p>{data}</p>
    </React.Fragment>
  );
};

export default MainPage;
