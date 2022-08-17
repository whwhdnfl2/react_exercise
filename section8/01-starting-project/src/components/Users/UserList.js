import React from "react";
import UserItem from "./UserItem";
const UserList = (props) => {
  return (
    <div>
      <ul>
        {props.sendData.map((data) => (
          <UserItem key={data.id} name={data.name} age={data.age}></UserItem>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
