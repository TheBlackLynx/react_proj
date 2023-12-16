import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { userActions, userReducer } from './model/slice/userSlice';

export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';
export type { User, UserSchema } from './model/types/user';

export { getUserAuthData };

export { isUserAdmin, isUserManager } from './model/selectors/roleSelectors';

export { UserRole } from './model/consts/consts';

export { getUserRole } from './model/selectors/roleSelectors';

export { useUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
