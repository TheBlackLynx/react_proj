import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from './Drawer';


export default {
    title: 'shared/ui/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;
const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Open = Template.bind({});
Open.args = {
    className: null,
    children: <div>testtest</div>,
    isOpen: true,
    onClose: null
};

export const Close = Template.bind({});
Close.args = {
    className: null,
    children: <div>testtest</div>,
    isOpen: false,
    onClose: null
};