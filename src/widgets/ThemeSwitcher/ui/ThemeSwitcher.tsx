import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from 'shared';
import { FC } from 'react';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import { Theme } from "app/providers/ThemeProvider";
import { AppButton } from "shared";
import { AppButtonTheme } from "shared/ui/AppButton/AppButton";


interface ThemeSwitcherProps {
    className?: string
}


export const ThemeSwitcher: FC<ThemeSwitcherProps> = ( props ) => {
    const {theme, toggleTheme} = useTheme();
    const {className} = props;
    return (
        <>
            <AppButton 
                buttonTheme={AppButtonTheme.CLEAR}
                className={classNames('', {}, [className])}
                onClick={toggleTheme}
            >

                { theme === Theme.DARK ? <DarkTheme /> :  <LightTheme /> }
            </AppButton>
    
        </>
       
    )
}