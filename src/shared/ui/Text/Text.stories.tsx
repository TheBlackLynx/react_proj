import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Text',
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof Text>;
const Template:
 ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextPrimary = Template.bind({});
TextPrimary.args = {
    title: 'Title',
    text: 'Text'  
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title'
};
export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text'  
};
export const TextPrimaryDark = Template.bind({});
TextPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
TextPrimaryDark.args = {
    title: 'Title',
    text: 'Text'  
};

export const onlyTitleDark = Template.bind({});
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
onlyTitleDark.args = {
    title: 'Title'
};
export const onlyTextDark = Template.bind({});
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
onlyTextDark.args = {
    text: 'Text'  
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR
};
