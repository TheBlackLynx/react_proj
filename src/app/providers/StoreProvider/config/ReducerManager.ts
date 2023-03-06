import { AnyAction, combineReducers, ReducersMapObject, Reducer } from "@reduxjs/toolkit";
import { MountedReducers, ReducerManager, StateSchema, StateSchemaKeys } from "./StateSchema"


export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>):
 ReducerManager{
    const reducers = { ...initialReducers }
    let combinedReducer = combineReducers(reducers)
    let keysToRemove: StateSchemaKeys[] = [] 
  
    const mountedReducers: MountedReducers = {};
    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (const key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },
        add: (key: StateSchemaKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer
            mountedReducers[key] = true;
            combinedReducer = combineReducers(reducers)
        },
        remove: (key: StateSchemaKeys) => {
            if (!key || !reducers[key]) {
                return
            }
        
            delete reducers[key]
            mountedReducers[key] = false;
        
            keysToRemove.push(key)
        
            combinedReducer = combineReducers(reducers)
        }
    }
}
  
