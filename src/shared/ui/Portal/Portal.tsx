import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    targetElement?: HTMLElement;
}

export const Portal = ({
    children,
    targetElement = document.body,
}: PortalProps) => {
    return createPortal(children, targetElement);
};
