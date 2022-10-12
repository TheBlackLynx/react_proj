import 'app/styles/index.scss';
import Story from "@storybook/react"

export const ThemeDecorator = (theme: theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);