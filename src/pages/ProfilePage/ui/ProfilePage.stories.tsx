import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;
const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage/>;


export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({
    profile: { isLoading: false, readonly: true },
})]
Primary.args = {};
