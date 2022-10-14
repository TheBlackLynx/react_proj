import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppButton, AppButtonSize, AppButtonTheme } from './AppButton';
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
const Template: 
ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

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

export const Background = Template.bind({});
Background.args = {
    children: 'text',
    buttonTheme: AppButtonTheme.BACKGROUND
}

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'text',
    buttonTheme: AppButtonTheme.BACKGROUND_INVERTED
}

export const Square = Template.bind({});
Square.args = {
    children: '>',
    buttonTheme: AppButtonTheme.BACKGROUND_INVERTED,
    square: true
}

export const SquareButtonM = Template.bind({});
SquareButtonM.args = {
    children: '>',
    square: true,
    size: AppButtonSize.M
}

export const SquareButtonL = Template.bind({});
SquareButtonL.args = {
    children: '>',
    square: true,
    size: AppButtonSize.L
}
export const SquareButtonXL = Template.bind({});
SquareButtonXL.args = {
    children: '>',
    square: true,
    size: AppButtonSize.XL
}

export const ButtonM = Template.bind({});
ButtonM.args = {
    children: 'Text',
    size: AppButtonSize.M
}
export const ButtonL = Template.bind({});
ButtonL.args = {
    children: 'Text',
    size: AppButtonSize.L
}

export const ButtonXL = Template.bind({});
ButtonXL.args = {
    children: 'Text',
    size: AppButtonSize.XL
}