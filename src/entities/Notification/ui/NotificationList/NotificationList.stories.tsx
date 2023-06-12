import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 
    'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {NotificationList} from './NotificationList';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'pages/NotificationList',
    component: NotificationList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>;
const Template: 
ComponentStory<typeof NotificationList> = (args) => <NotificationList />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})]


export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
Dark.args = {};
