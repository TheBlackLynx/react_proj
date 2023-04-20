import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from './Tabs';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';
import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/ui/Tabs',
    component: Tabs,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof Tabs>;
const Template:
 ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TextPrimary = Template.bind({});
TextPrimary.args = {
    tabs: [
        {
            value: 'tab1',
            content: 'tab1'
        },
        {
            value: 'tab2',
            content: 'tab2'
        },
        {
            value: 'tab3',
            content: 'tab3'
        }
    ],
    value: 'tab2',
    onTabClick: action('onTabClick')
};
