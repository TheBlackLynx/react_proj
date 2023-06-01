import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ArticleDetailsComments} from './ArticleDetailsComments';  
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { StoreProvider } from 'app/providers/StoreProvider';


export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {};


