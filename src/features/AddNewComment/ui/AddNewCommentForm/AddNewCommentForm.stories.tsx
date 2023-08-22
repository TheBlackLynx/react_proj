import { ComponentStory, ComponentMeta } from '@storybook/react';

import  AddNewCommentForm from './AddNewCommentForm';
import { action } from '@storybook/addon-actions'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'features/AddNewCommentForm',
    component: AddNewCommentForm,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddNewCommentForm>;
const Template: ComponentStory<typeof AddNewCommentForm> = (args) => <AddNewCommentForm {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment')
};
Normal.decorators = [StoreDecorator({
})]
