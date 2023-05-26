import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 
    'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';
import { RouterDecorator } 
    from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;
const Template: 
ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Light = Template.bind({});
Light.decorators = [ StoreDecorator({
    user: {authData: {}}
})]

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator(), StoreDecorator({
    user: {authData: {}}
})]
Dark.args = {};

export const noAuth = Template.bind({});
noAuth.decorators = [ RouterDecorator(), StoreDecorator({
    user: {}
})]
noAuth.args = {};