import React from "react";
import { ButtonProps } from "./Button.types";
import "./styles.css";

const Button: React.FC<ButtonProps> = ({ children, variant="primary", ...rest }) => {
  return (
    <button className={`S001-button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
