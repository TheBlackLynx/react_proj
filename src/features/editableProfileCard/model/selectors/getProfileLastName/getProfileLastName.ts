import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileLastName = (state: StateSchema) => state.profile?.data?.last || '';