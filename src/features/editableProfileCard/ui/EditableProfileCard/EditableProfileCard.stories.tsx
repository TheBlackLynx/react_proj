import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {EditableProfileCard} from './EditableProfileCard';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';


export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard
} as ComponentMeta<typeof EditableProfileCard>;

const Template: 
ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;


export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator()];
