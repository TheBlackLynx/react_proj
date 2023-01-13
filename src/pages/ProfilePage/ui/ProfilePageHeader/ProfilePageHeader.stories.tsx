import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ProfilePageHeader} from './ProfilePageHeader';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Pages/ProfilePageHeader',
    component: ProfilePageHeader,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePageHeader>;
const Template: ComponentStory<typeof ProfilePageHeader> = () => <ProfilePageHeader/>;


export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({
    profile: { isLoading: false, readonly: true },
})]
Primary.args = {};
