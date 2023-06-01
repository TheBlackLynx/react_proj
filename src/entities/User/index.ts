import { getUserAuthData } from 
    './model/selectors/getUserAuthData/getUserAuthData'
export {
    userActions,
    userReducer,
    
} from "./model/slice/userSlice"

export {
    getUserMounted
} from './model/selectors/getUserMounted/getUserMounted'
export { 
    User, 
    UserSchema,
    UserRole
} from './model/types/user'

export {
    getUserAuthData
}


export {
    isUserAdmin,
    isUserManager
} from './model/selectors/roleSelectors'