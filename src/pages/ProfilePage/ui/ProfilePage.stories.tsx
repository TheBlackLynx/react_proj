import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;
const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage/>;


export const ReadOnly = Template.bind({});
ReadOnly.decorators = [StoreDecorator({
    profile: {  error: 'ERROR' },
})]
ReadOnly.args = {};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            first: "Marica",
            last: "Sav",
            age: 32,
            currency: Currency.EUR,
            country: Country.RU,
            username: "",
            avatar: "https://avatarko.ru/img/avatar/27/multfilm_animaciya_26814.gif"   
        }
    },
})]
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({
    profile: {
        form: {
            first: "Marica",
            last: "Sav",
            age: 32,
            currency: Currency.EUR,
            country: Country.RU,
            username: "",
            avatar: "https://avatarko.ru/img/avatar/27/multfilm_animaciya_26814.gif"
    
        }
    },
}), ThemeDecorator(Theme.DARK)]
Dark.args = {};
