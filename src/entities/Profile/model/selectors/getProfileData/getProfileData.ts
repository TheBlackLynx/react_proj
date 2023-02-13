import { StateSchema } from "app/providers/StoreProvider";
import { ProfileSchema, ProfileType } from "../../types/profile";

export const getProfileData = (state: StateSchema) => state.profile?.data;