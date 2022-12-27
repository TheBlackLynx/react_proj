import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
   children?: ReactNode;
   initialState?: DeepPartial<StateSchema>,
   asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}


let RootState;
let AppDispatch

export const StoreProvider = ( props: StoreProviderProps ) => {
    const { children, initialState, asyncReducers } = props;
    const store = createReduxStore(
        initialState as StateSchema,  
        asyncReducers as ReducersMapObject<StateSchema>
    )
    // AppDispatch = typeof store.dispatch;

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
// export type ddd = typeof RootState
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type dddd = typeof AppDispatch;