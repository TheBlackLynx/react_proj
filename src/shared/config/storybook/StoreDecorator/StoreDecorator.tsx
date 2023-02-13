import 'app/styles/index.scss';
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { BrowserRouter } from 'react-router-dom';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { profileReducer } from 'entities/Profile';
import { articleDetailsActions, articleDetailsReducer }
    from 'entities/Article/model/slice/articleSlice';
import { addNewCommentFormReducer } from 'features/AddNewComment/model/slice/addNewCommentForm';
import { atricleDetailsCommentsReducer } 
from 'pages/ArticleDetailsPage/model/slice/atricleDetailsCommentsSlice';


const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addNewCommentForm: addNewCommentFormReducer,
    comments: atricleDetailsCommentsReducer
}
export const StoreDecorator = (
    state?: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList
) => (StoryComponent: Story) => {
    return (
        <BrowserRouter>
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        </BrowserRouter>
    )
};