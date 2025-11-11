import { cn } from "@/shared/config/lib";
import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Button.module.scss"

type ButtonSize = "xs" | "sm" | "md" | "lg;"
type ButtonForm = "rounded" | "pill" | "circle"
type ButtonTheme = "primary" | "secondary" | "tertiary" | "outline" | "ghost"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  clasName?: string;
  size?: ButtonSize;
  form?: ButtonForm;
  theme?: ButtonTheme;
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { children, clasName, size = "sm", theme = "primary", form = "rounded", disabled = false, ...rest } = props
  return (
        <button 
        {...rest} 
        disabled={disabled} 
        className={cn(
          styles.button, 
          clasName, 
          styles[size], 
          styles[form], 
          styles[theme],
          {
            [styles.disabled]: disabled,
          }
        )}>{children}</button>)
}

