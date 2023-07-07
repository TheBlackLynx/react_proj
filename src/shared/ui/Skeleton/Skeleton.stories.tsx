import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 
    '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers';
import { RouterDecorator } 
    from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/ui/Skeleton',
    component: Skeleton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof Skeleton>;
const Template:
 ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    width:'100%',
    height: 200
};
Primary.decorators=[RouterDecorator()]

export const Circle = Template.bind({});
Circle.args = {
    border:'50%',
    height: 100,
    width: 100
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    width:'100%',
    height: 200
};
NormalDark.decorators=[ThemeDecorator(Theme.DARK)]

export const CircleDark = Template.bind({});
CircleDark.args = {
    border:'50%',
    height: 100,
    width: 100
};

CircleDark.decorators=[ThemeDecorator(Theme.DARK)]


