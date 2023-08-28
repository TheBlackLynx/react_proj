import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localstogare";
import { useState, useMemo, PropsWithChildren } from "react";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { Theme } from "@/shared/const/theme";

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