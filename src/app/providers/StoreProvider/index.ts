import { StoreProvider } from './ui/StoreProvider';
import type { createReduxStore, AppDispatch } from './config/store';
import type { StateSchema, ReduxStoreWithManager, ThunkExtraArg } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
  
}

export type {
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkExtraArg
}