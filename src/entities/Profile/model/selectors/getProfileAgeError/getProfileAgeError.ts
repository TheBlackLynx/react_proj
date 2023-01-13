import { StateSchema } from "app/providers/StoreProvider";

export const getProfileAgeError = (state: StateSchema) => state.profile?.ageError || '';