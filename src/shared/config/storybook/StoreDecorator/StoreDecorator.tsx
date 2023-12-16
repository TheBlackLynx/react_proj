// eslint-disable-next-line marica-path-checker-plugin/layer-import
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';

import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { addNewCommentFormReducer } from '@/features/AddNewComment/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addNewCommentForm: addNewCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};
export const StoreDecorator =
    (state?: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
    (StoryComponent: Story) => {
        return (
            <BrowserRouter>
                <StoreProvider
                    initialState={state}
                    asyncReducers={{
                        ...defaultAsyncReducers,
                        ...asyncReducers,
                    }}
                >
                    <StoryComponent />
                </StoreProvider>
            </BrowserRouter>
        );
    };
