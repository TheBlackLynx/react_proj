import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleReccomendationsList } from './ArticleReccomendationsList'
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'features/ArticleReccomendationsList',
    component: ArticleReccomendationsList
} as ComponentMeta<typeof ArticleReccomendationsList>;

const Template: 
ComponentStory<typeof ArticleReccomendationsList> = (args) => <ArticleReccomendationsList {...args} />;


export const Primary = Template.bind({});
Primary.args = {
};



