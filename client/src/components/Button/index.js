import React from "react";
import Button from "react-bootstrap/Button";

function Btn(props) {
  return (
    <Button href={props.href} variant="dark">
      {props.title}
    </Button>
  );
}

export default Btn;
