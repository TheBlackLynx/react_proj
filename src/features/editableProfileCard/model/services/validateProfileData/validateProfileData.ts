import { ProfileType } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (profile?: ProfileType) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const { first, last, age, country, username } = profile;
    const errors: ValidateProfileError[] = [];
    if (!first || !last) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }
    if (!username && username === '') {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    if (age && age.toString().length > 3) {
        errors.push(ValidateProfileError.INCORRECT_AGE_LENGTH);
    }
    console.log('errors', errors);
    return errors;
};
