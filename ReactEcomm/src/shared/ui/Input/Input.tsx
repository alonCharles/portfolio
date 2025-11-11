import { cn } from "@/shared/config/lib";
import type { InputHTMLAttributes, ReactNode } from "react";
import { useState } from 'react'
import styles from "./Input.module.scss";
import { Button } from "../Button/Button";
import HideIcon from '@/shared/assets/icons/Hide.svg?react';
import ShowIcon from '@/shared/assets/icons/Show.svg?react';

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">

interface InputProps extends HTMLInputType{
    className?: string;
    value?: string;
    Icon?: ReactNode;
    rounded?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void 
}

export const Input = (props: InputProps) => {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const {className, value, Icon, rounded=false, disabled=false, onChange,type = "text", ...rest} = props

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }
    return (
        <div className={cn(styles.inputContainer, className, {
            [styles.rounded]: rounded,
            [styles.disabled]: disabled
            
        })}>
            {Icon}
            <input 
                {...rest} 
                value={value} 
                disabled={disabled} 
                className={cn(styles.input, {
                    [styles.disabled]: disabled
                })} 
            />

            {type === "password" && (
                <Button 
                    onClick={toggleShowPassword}
                    theme="ghost"
                    type="button"
                    clasName={styles.toggleVisibility} 
                >
                    {showPassword ? <HideIcon/> : <ShowIcon/> }
                </Button>
            )}
        </div>
    )
}