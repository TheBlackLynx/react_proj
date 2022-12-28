import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 
    'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';
import { RouterDecorator } from
    'shared/config/storybook/RouterDecorator/RouterDecorator';
import ProfilePage from './ProfilePage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;
const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = {};