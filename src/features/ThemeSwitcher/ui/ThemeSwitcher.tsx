
import { classNames } from '@/shared';
import { FC, memo } from 'react';
import LightTheme from '@/shared/assets/icons/theme-light.svg';
import DarkTheme from '@/shared/assets/icons/theme-dark.svg';
import { AppButton } from "@/shared";
import { AppButtonTheme } from "@/shared/ui/AppButton/AppButton";
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/const/theme';


interface ThemeSwitcherProps {
    className?: string
}


export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(( props ) => {
    const {theme, toggleTheme} = useTheme();
    const {className} = props;
    return (
        <>
            <AppButton 
                buttonTheme={AppButtonTheme.CLEAR}
                className={classNames('', {}, [className])}
                onClick={toggleTheme} fullWidth={null}            >

                { theme === Theme.DARK ? <DarkTheme /> :  <LightTheme /> }
            </AppButton>
    
        </>
       
    )
})