import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/ui/ListBox',
    component: ListBox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;
const Template: ComponentStory<typeof ListBox> = (args) => <ListBox 
    defaultValue={'Выберите значение'}
    onChange={(value: string) => { const c = value}}
    items={
        [
            {
                value: '123213',
                content: <div>weqweqwe</div>
            },
    
            {
                value: '23234',
                content: <div>weq23423weqwe</div>,
                disabled: true
            },
            {
                value: '1231323213',
                content: <div>123</div>
            }
        ]}
/>

export const Primary = Template.bind({});
Primary.args = {
   
};

