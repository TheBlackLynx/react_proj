import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ProfileCard} from './ProfileCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard
} as ComponentMeta<typeof ProfileCard>;

const Template: 
ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: "Marica",
        last: "Sav",
        age: 32,
        currency: Currency.EUR,
        country: Country.RU,
        username: "",
        avatar: "https://avatarko.ru/img/avatar/27/multfilm_animaciya_26814.gif"
    }
};
Primary.decorators = [StoreDecorator()];

export const Error = Template.bind({});
Error.args = {
    error: 'error'
};
Error.decorators = [StoreDecorator()];

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true
};
IsLoading.decorators = [StoreDecorator()];



