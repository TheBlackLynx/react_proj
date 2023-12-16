import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';
import withMock from 'storybook-addon-mock';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;
const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

Light.parameters = {
    mockData: [
        {
            url: __API__ + '/notifications',
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление 1',
                    description: 'Произошло какое-то событие',
                    userId: '1',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Произошло какое-то событие',
                    userId: '1',
                    href: 'http://localhost:3000/admin',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'Произошло какое-то событие',
                    userId: '1',
                    href: 'http://localhost:3000/admin',
                },
            ],
        },
    ],
};
