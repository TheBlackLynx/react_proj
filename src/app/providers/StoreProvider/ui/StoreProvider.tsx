import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
   children?: ReactNode;
   initialState?: DeepPartial<StateSchema>,
   asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ( props: StoreProviderProps ) => {
    const { children, initialState, asyncReducers } = props;
    //добавление navigate в middleware

    const navigate = useNavigate();
    const store = createReduxStore(
        initialState as StateSchema,  
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
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