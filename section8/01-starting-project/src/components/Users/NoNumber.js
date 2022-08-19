import React from "react";

const NoNumber = (props) =>{
    const returnAddUser = () =>{
        props.sendTrue();
    }
  return (
    <div>
      <p>no number</p>
      <button onClick={returnAddUser}> okay </button>
    </div>
  );
     
}

export default NoNumber;