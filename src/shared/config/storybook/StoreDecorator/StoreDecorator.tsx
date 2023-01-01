import 'app/styles/index.scss';
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { BrowserRouter } from 'react-router-dom';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';


const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer
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