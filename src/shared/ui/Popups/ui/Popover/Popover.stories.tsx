import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppButton } from '@/shared/ui/AppButton/AppButton';

import { PopoverCustom as  Popover } from './Popover';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/ui/Popover',
    component: Popover,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{padding: '150px'}}><Story /></div>
    ]
} as ComponentMeta<typeof Popover>;
const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args}
/>

export const Normal = Template.bind({});
Normal.args = {
    trigger: <AppButton>Press</AppButton>, 
    direction: 'top left',
    children: <>
        wqrwqrqwr</>
};

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    
};
export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
};
export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
};
