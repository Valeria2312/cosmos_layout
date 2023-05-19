import React from "react";
import styles from "./style.module.scss"
interface LogoProps {}


export const Logo:React.FC<LogoProps> = () => {
    return (
        <h1 className={styles.logo}>
            <a href='/'>Dusktopia</a>
        </h1>
    )
}