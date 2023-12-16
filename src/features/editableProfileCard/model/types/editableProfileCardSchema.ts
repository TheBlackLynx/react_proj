import { ProfileType } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
    data?: ProfileType;
    form?: ProfileType;
    isLoading: boolean;
    error?: string;
    validateErrors?: ValidateProfileError[];
    readonly: boolean;
}
