import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
// import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [name in StateSchemaKeys]?: Reducer;
} 

export type ReducerListEntry = [StateSchemaKeys, Reducer]
interface  DynamicModuleLoadersProps {
    children: ReactNode;
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}


export const DynamicModuleLoaders: FC<DynamicModuleLoadersProps> = 
( props: DynamicModuleLoadersProps ) => {
    const { children, reducers, removeAfterUnmount } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer)
        })
        
        dispatch({type: `@init ${name} reducers`})
        return () => {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([name ]: ReducerListEntry) => {
                    store.reducerManager.remove(name)
                    dispatch({type: `@destroy ${name} reducers`})
                }) }
           
        }
    }, [removeAfterUnmount, dispatch, reducers, store.reducerManager])
  
    return (
        <div>
            {children}
        </div>
    )
}