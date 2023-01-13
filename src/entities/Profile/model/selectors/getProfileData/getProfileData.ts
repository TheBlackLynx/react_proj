import { StateSchema } from "app/providers/StoreProvider";
import { ProfileSchema } from "../../types/profile";

export const getProfileData = (state: StateSchema) => state.profile?.data ;