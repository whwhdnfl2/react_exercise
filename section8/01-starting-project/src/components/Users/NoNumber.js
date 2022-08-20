import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
const NoNumber = (props) => {
  const returnAddUser = () => {
    props.sendTrue();
  };
  return (
    <Card>
      <p>no number</p>
      <Button onClick={returnAddUser}> okay </Button>
    </Card>
  );
};

export default NoNumber;
