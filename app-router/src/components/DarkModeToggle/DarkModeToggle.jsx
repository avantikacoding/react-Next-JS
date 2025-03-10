'use client'
import React, { useContext } from 'react'
import styles from "./darkModeToggle.module.scss";
import { ThemeContext } from '@/context/ThemeContex';

export default function DarkModeToggle() {
    const{mode ,toggle} = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div className={styles.ball}  style={ mode === "light" ? { left: "2px" } : { right: "2px" } }/>
        </div>
    )
}
