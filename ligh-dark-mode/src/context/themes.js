import { createContext, useContext } from "react";


export const ThemeContext = new createContext(null);

// ! export const ThemeContextProvider = ThemeContext.provider
export const ThemeContextProvider = ThemeContext.Provider

// Custom Hook

export function useTheme (){
    return useContext(ThemeContext)
}