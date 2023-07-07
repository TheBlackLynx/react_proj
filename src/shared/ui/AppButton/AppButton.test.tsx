import { render, screen } from '@testing-library/react';
import { AppButton } from '@/shared';
import { AppButtonTheme } from './AppButton';

describe('AppButton', () => {
    test('test app button creation', () => {
        render (
            <AppButton>TEST</AppButton>
        );
        expect(screen.getByText('TEST')).toBeInTheDocument;

    })
    test('test app button theme', () => {
        render (
            <AppButton buttonTheme={AppButtonTheme.CLEAR}>TEST</AppButton>
        );
        expect(screen.getByText('TEST')).toHaveClass('clear');
    })
})