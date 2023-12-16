// eslint-disable-next-line marica-path-checker-plugin/layer-import
import { ThemeProvider } from '@/app/providers';
import '@/app/styles/index.scss';
import { Theme } from '@/shared/const/theme';
import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
