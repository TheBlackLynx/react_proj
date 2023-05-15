import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/ui/ListBox',
    component: ListBox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{padding: '150px'}}><Story /></div>
    ]
} as ComponentMeta<typeof ListBox>;
const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args}
/>

export const Normal = Template.bind({});
Normal.args = {
    items: [
        {
            content: 'weqweqwe', value: 'wdweweqwe'
        },
        {
            content: 'weqweqdewwewe', value: 'wdwewwrereqwe'
        },
    ]
};

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    value: '123',
    items: [
        {
            content: 'weqweqwe', value: 'wdweweqwe'
        },
        {
            content: 'weqweqdewwewe', value: 'wdwewwrereqwe'
        },
    ]
};
export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        {
            content: 'weqweqwe', value: 'wdweweqwe'
        },
        {
            content: 'weqweqdewwewe', value: 'wdwewwrereqwe'
        },
    ]
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        {
            content: 'weqweqwe', value: 'wdweweqwe'
        },
        {
            content: 'weqweqdewwewe', value: 'wdwewwrereqwe'
        },
    ]
};
export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        {
            content: 'weqweqwe', value: 'wdweweqwe'
        },
        {
            content: 'weqweqdewwewe', value: 'wdwewwrereqwe'
        },
    ]
};
