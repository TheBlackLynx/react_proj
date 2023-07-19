import { useEffect } from "react"
import { useAppDispatch } from "./useAppDispatch"

export const useInitialEffect = (callback: () => void) => {
    return (useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback()
        }

    }, [callback]))
}