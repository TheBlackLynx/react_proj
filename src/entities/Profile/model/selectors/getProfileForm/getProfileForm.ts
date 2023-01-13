import { StateSchema } from "app/providers/StoreProvider";
import { ProfileSchema } from "../../types/profile";

export const getProfileForm = (state: StateSchema) => state.profile?.form;