import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"
import { useState, useMemo, FC, PropsWithChildren } from "react"

const defaultTheme = 
localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme,
    
}

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
    const {
        children,
        initialTheme
    } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])
   
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>

    )
}