import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentItem } from './CommentItem';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'entities/CommentItem',
    component: CommentItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentItem>;
const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', login: 'Vasya' },
    },
};
Normal.decorators = [StoreDecorator({})]

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', login: 'Vasya' },
    },
    isLoading: true,
};

Loading.decorators = [StoreDecorator({})]
