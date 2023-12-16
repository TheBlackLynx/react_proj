import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'entities/CommentList',
    component: CommentList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;
const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', login: 'Vasya' },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: { id: '1', login: 'Petya' },
        },
    ],
};

Normal.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
Loading.decorators = [StoreDecorator({})];
