import { ButtonHTMLAttributes } from "react";

type ButtonType = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
}
