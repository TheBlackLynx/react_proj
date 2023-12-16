import { ReactNode } from 'react';
import { Popover } from '@headlessui/react';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { classNames } from '@/shared';
import { DropDownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropDownDirection;
    children?: ReactNode;
}

export const PopoverCustom = (props: PopoverProps) => {
    const { className, trigger, direction = 'bottom left', children } = props;

    const optionClasses = [mapDirectionClass[direction]];
    return (
        <Popover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <Popover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </Popover.Button>

            <Popover.Panel
                className={classNames(cls.popoverPanel, {}, optionClasses)}
            >
                {children}
            </Popover.Panel>
        </Popover>
    );
};
