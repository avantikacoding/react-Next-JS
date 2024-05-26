'use client'
const { createContext, useState } = require("react");


export const ThemeContext = createContext('dark');

export function ThemeProvider({ children }) {
    const [mode, setMode] =useState('dark')
    function toggle(){
        setMode((prev)=> prev ==='dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={{toggle,mode}}>
            <div className={mode}>
            {children}
            </div>
        </ThemeContext.Provider>
    )
}

