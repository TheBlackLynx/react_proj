import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from '../ui/ThemeContext';
import { useContext } from 'react';


interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme 
}

export function useTheme():UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme?.(newTheme) //check function for undefined value
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }
    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    }

}