import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/ui/Text',
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

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title'
};
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text'  
};
export const TextPrimaryDark = Template.bind({});
TextPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
TextPrimaryDark.args = {
    title: 'Title',
    text: 'Text'  
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
OnlyTitleDark.args = {
    title: 'Title'
};
export const OnlyTextDark = Template.bind({});
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
OnlyTextDark.args = {
    text: 'Text'  
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title',
    text: 'Text',
    size: TextSize.L
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title',
    text: 'Text',
    size: TextSize.M
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title',
    text: 'Text',
    size: TextSize.S
};