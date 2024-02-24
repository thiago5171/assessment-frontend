
import React from 'react';
import styles from "./styles.module.scss";

interface ButtonProps {
    children: React.ReactNode;

}

function Button({ children }: ButtonProps) {
    return (
        <button className={styles.buttonStyle} >{children}</button>
    )
}

export default Button;