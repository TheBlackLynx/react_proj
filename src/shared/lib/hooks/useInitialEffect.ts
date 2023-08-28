import { useEffect } from "react"

export const useInitialEffect = (callback: () => void) => {
    return (useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback()
        }

    }, [callback]))
}