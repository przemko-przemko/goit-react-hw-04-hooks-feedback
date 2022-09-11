import React from "react";
import { Buttons } from "./Button_styles";




const Button = ({ onClick, value }) => {
  return (
    <>
      <Buttons onClick={onClick}>
           {value}
           </Buttons>
    </>
  );
};

export default Button;
