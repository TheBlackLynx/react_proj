import { StateSchema } from "app/providers/StoreProvider";

//для того, чтобы при пустом значении не было undefined и, соответственно, не было warning Uncontrolled input
export const getAddNewCommentFormText = (state: StateSchema) => state.addNewCommentForm?.text ?? '';

export const getAddNewCommentFormError = (state: StateSchema): string => {
    return state?.addNewCommentForm?.error as string;
}