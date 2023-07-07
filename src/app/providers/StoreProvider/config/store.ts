import {
    CombinedState, configureStore, getDefaultMiddleware,
    Reducer, ReducersMapObject
} from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { scrollReducer } from '@/features/ScrollSave';
import { NavigateOptions, To } from 'react-router-dom';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';
import { createReducerManager } from './ReducerManager'
import { StateSchema, ThunkExtraArg } from './StateSchema'

export function createReduxStore(
    initialState?: StateSchema,
    asyncRedicers?: ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncRedicers,
        user: userReducer,
        scroll: scrollReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
       
    }

    const reducerManager = createReducerManager(rootReducers);
    const extraArgs: ThunkExtraArg = {
        api: $api
    }
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs
            },
        }
        ).concat(rtkApi.middleware)
    })

    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
