import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginIsLoading = (state: StateSchema): boolean => {
    return state?.loginForm?.isLoading as boolean;
};
