import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { DropDown } from './DropDown';
import { AppButton } from '../../../AppButton/AppButton';

export default {
    title: 'shared/ui/DropDown',
    component: DropDown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DropDown>;

const Template: 
ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: <AppButton fullWidth={null}>Open me!</AppButton>,
    items: [
        {
            content: 'first'
        },
        {
            content: 'second'
        },
        {
            content: 'third'
        },
    ]
};




