import { Dictionary, EntityId, EntityState } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import { CommentType } from "entities/Comment";

export interface ArticleDetailsRecomendationsSchema extends EntityState<Article>{
    isLoading: boolean;
    error?: string;
}
