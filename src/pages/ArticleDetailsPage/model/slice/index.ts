import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailPageSchema } from "../types/ArticleDetailPageSchema";
import { articleDetailsPageRecomendationsReducer } from "./articleDetailsPageRecomendationsSlice";
import { atricleDetailsCommentsReducer } from "./atricleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailPageSchema>({
    recommendations: articleDetailsPageRecomendationsReducer,
    comments: atricleDetailsCommentsReducer
})