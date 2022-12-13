import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
   children?: ReactNode;
   initialState?: StateSchema
}

const store = createReduxStore()
export const StoreProvider = ( props: StoreProviderProps ) => {
    const { children } = props;
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}