import React from "react";

import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.sendData.map((data) => (
          <li key={data.id}>
            {data.name} ({data.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
