import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentItem } from './CommentItem';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'entity/CommentItem',
    component: CommentItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentItem>;
const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [StoreDecorator({
   
})]


