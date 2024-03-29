import { Dictionary, EntityId, EntityState } from "@reduxjs/toolkit";
import { CommentType } from "entities/Comment";

export interface ArticleDetailsCommentSchema extends EntityState<CommentType>{
    isLoading: boolean;
    error?: string;
    // ids?: EntityId[];
    // entities: Record<EntityId, CommentType>
}
