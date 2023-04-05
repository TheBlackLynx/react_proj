import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject }
    from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { Article, ArticleDetailSchema } from "entities/Article";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { AddNewCommentSchema } from "features/AddNewComment";
import { LoginSchema } from "features/AuthByUsername";
import { ScrollSaveSchema } from "features/ScrollSave/model/type/ScrollSaveSchema";
import { ArticleDetailsCommentSchema, ArticleDetailsRecomendationsSchema } from "pages/ArticleDetailsPage";
import { ArticleDetailPageSchema } from "pages/ArticleDetailsPage/model/types";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { NavigateOptions, To } from "react-router-dom";

export interface StateSchema{
    user: UserSchema,

    scroll: ScrollSaveSchema,
    //асинхронные редюсеры
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailSchema,
    addNewCommentForm?: AddNewCommentSchema,
    articles?: ArticlesPageSchema,
    articleDetailsPage?: ArticleDetailPageSchema
}

export type StateSchemaKeys = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKeys, boolean>;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKeys, reducer: Reducer) => void,
    remove: (key: StateSchemaKeys) => void
    //проверка состояния редюсеров true - вмонтирован, false - нет  
    getMountedReducers: () => MountedReducers;
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}