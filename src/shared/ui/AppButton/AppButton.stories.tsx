import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppButton, AppButtonTheme } from './AppButton';
import { ThemeDecorator } from 
    'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Button',
    component: AppButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [ThemeDecorator(Theme.DARK)]
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: 'text'
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    buttonTheme: AppButtonTheme.CLEAR
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'text',
    buttonTheme: AppButtonTheme.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
OutlineDark.args = {
    children: 'text',
    buttonTheme: AppButtonTheme.OUTLINE
}