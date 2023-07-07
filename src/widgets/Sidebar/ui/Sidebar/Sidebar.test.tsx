import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 
    '@/shared/config/tests/componentRender/componentRender';
import { Sidebar } from '@/widgets/Sidebar';

describe('Sidebar', () => {
    test('test app button creation', () => {
        const opt = {
            route: '/'
        }
        componentRender(<Sidebar />, opt);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument;

    })
    test('test toggle', () => {
        const opt = {
            route: '/'
        }
        componentRender(<Sidebar />, opt);
        const toggleButton = screen.getByTestId('sidebar-toggle')
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')

    })
})