import { ComponentStory, ComponentMeta } from '@storybook/react';
import  AdminPanelPage from './AdminPanelPage';
import { ThemeDecorator } from 
    '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
export default {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AdminPanelPage>;
const Template: ComponentStory<typeof AdminPanelPage> = () => <AdminPanelPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = {};
