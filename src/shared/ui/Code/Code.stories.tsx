import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/Code',
    component: Code,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;
const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: `export default {
        title: 'shared/Code',
        component: Code,
        // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    } as ComponentMeta<typeof Code>;`
};

