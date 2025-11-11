import { ThemeContext, Theme, type ThemeType, LOCAL_STORAGE_THEME_KEY } from "@/shared/config"
import { useEffect, useState, type ReactNode } from "react"

interface ThemeProviderProps {
    children: ReactNode;
}

const defaltTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || Theme.PINK

export const ThemeProvider = ({children}:ThemeProviderProps ) => {
    const [theme, setTheme] = useState<ThemeType>(defaltTheme)

    useEffect(() => {
       document.body.className = `${theme}` 
    },[theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}