import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types'
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './ReducerManager'
import { StateSchema } from './StateSchema'

export function createReduxStore(
    initialState?: StateSchema, 
     asyncRedicers?: ReducersMapObject<StateSchema>) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncRedicers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

// export type AppStore = ReturnType<typeof createReduxStore>;
// export type AppDispatch = AppStore['dispatch'];
