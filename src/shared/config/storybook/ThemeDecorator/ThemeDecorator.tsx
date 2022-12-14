import 'app/styles/index.scss';
import {Story} from "@storybook/react"
import { Theme, ThemeProvider } from 'app/providers';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);