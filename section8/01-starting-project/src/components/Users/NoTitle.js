import React from "react";

const NoTitle = (props) => {

    const returnAddUser = () =>{
        props.sendTrue();
    }
  return (
    <div>
      <p>no name</p>
      <button onClick={returnAddUser}> okay </button>
    </div>
  );
};

export default NoTitle;
