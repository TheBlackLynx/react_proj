import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 
    '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {AvatarDropDown} from './AvatarDropDown';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'features/AvatarDropDown/AvatarDropDown',
    component: AvatarDropDown,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropDown>;
const Template: 
ComponentStory<typeof AvatarDropDown> = (args) => <AvatarDropDown />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1'
        } 
    }
   
   
})]


export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
Dark.args = {};
