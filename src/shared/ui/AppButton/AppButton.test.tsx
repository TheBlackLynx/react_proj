import { render, screen } from '@testing-library/react';
import { AppButton } from '@/shared';
import { AppButtonTheme } from './AppButton';

describe('AppButton', () => {
    test('test app button creation', () => {
        render (
            <
                AppButton fullWidth={null}>TEST</AppButton>
        );
        expect(screen.getByText('TEST')).toBeInTheDocument;

    })
    test('test app button theme', () => {
        render (
            <AppButton buttonTheme={AppButtonTheme.CLEAR} fullWidth={null}>TEST</AppButton>
        );
        expect(screen.getByText('TEST')).toHaveClass('clear');
    })
})