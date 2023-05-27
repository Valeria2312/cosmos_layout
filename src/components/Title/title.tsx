import React from "react";
import styles from './title.module.scss'
import cl from "classnames";

interface TitleProps {
    children: string,
    size: 'medium' | 'large',

}
export const Title: React.FC<TitleProps> = ({children, size='medium'}) => {
    return(
        <h2 className={cl(styles.title, styles[`title${size}`])}>
            {children}
        </h2>
    )
}