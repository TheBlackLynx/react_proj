import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailPageSchema } from "../types";
import { articleDetailsPageRecomendationsReducer } from "./articleDetailsPageRecomendationsSlice";
import { atricleDetailsCommentsReducer } from "./atricleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailPageSchema>({
    recommendations: articleDetailsPageRecomendationsReducer,
    comments: atricleDetailsCommentsReducer
})