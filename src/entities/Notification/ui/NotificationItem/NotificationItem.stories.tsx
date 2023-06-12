import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 
    'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {NotificationItem} from './NotificationItem';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'pages/NotificationItem',
    component: NotificationItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;
const Template: 
ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args}/>;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})]


export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
Dark.args = {};
