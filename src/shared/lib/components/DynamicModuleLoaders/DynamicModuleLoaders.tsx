import { FC, PropsWithChildren, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
// import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { StateSchemaKeys } from '@/app/providers/StoreProvider/config/StateSchema';
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


export const DynamicModuleLoader = 
( props: PropsWithChildren<DynamicModuleLoadersProps> ) => {
    const { children, reducers, removeAfterUnmount } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        const mountedReducers =  store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKeys]
            if(!mounted) {
                store.reducerManager.add(name as StateSchemaKeys, reducer)
                dispatch({type: `@INIT ${name} reducer`})
            }
           
        })
        
        dispatch({type: `@init ${name} reducers`})
        return () => {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKeys)
                    //  dispatch({type: `@destroy ${name} reducers`})
                }) }
           
        }
    }, [removeAfterUnmount, dispatch, reducers, store.reducerManager])
  
    return (
        <>
            {children}
        </>
    )
}