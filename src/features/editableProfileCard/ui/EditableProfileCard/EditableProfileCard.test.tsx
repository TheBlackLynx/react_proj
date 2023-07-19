import { screen } from '@testing-library/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileType } from '@/entities/Profile';
import { profileReducer } from '../../model/slice/profileSlice';
import { componentRender } from 
    '@/shared/config/tests/componentRender/componentRender';
import { EditableProfileCard } from './EditableProfileCard';
import userEvent from '@testing-library/user-event';
import { $api } from '@/shared/api/api';

const profile: ProfileType = {
    id:'1',
    first: 'admin',
    last: 'admin',
    age: 465,
    country: Country.RU,
    currency: Currency.EUR,
    city: 'Moscow',
    username: 'admin123' 

}
const opt = {
    initialState: {
        profile: {
            readonly: true,
            form: profile,
            data: profile,
            isLoading: false
            
        },
        user: {
            authData: {
                id: '1'
            }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}
describe('features/EditableProfileCard',  () => {
    test('readonly mode has been changed', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, opt);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()

    })

    test('Values should be default by canceling', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, opt);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'erew')
        
        // await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
        // await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('erew')
        // expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('')
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')

    })

    test('validation test', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, opt);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()

    })

    test('validation test', async () => {
        const mockRequest = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id={'1'}/>, opt);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
        expect(mockRequest).toHaveBeenCalled()

    })
})