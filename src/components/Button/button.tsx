import React from "react";
import styles from './button.module.scss'

interface ButtonProps {
    children: string;
    onClick: () => void;
}
export const Button: React.FC<ButtonProps> = ({children,onClick}) => {
    return(
        <button  className={styles.button} onClick={onClick}>
            {children}
        </button>
    )
}