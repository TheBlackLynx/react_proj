import { fetchCommentsByArticleId }
 from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import { useEffect } from "react"
import { useAppDispatch } from "./useAppDispatch"

export const useInitialEffect = (callback: () => void) => {
    const dispatch = useAppDispatch;
    return (useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback()
        }

    }, []))
}