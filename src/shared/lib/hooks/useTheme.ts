import { Theme } from '../../const/theme';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../../const/localstogare';


interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme 
}

export function useTheme():UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        let newTheme: Theme;
        switch(theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT
            break;
        case Theme.LIGHT:
            newTheme = Theme.BLUE
            break;
        case Theme.BLUE:
            newTheme = Theme.DARK
            break;
        default: 
            newTheme = Theme.LIGHT
        }
        
        setTheme?.(newTheme) //check function for undefined value
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }
    return {
        theme: theme || Theme.BLUE,
        toggleTheme
    }

}