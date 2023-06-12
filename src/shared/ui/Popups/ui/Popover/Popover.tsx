import { Fragment, ReactNode, useState } from 'react'
import { Listbox as HListbox, Popover} from '@headlessui/react';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss'
import { AppButton, classNames } from 'shared';
import { HStack } from '../../../Stack/HStack/HStack';
import { DropDownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';



interface PopoverProps {
    className?: string,
    trigger: ReactNode,
    direction?: DropDownDirection;
    children?: ReactNode;

}

export const PopoverCustom = ( props : PopoverProps) => {
    const {
        className, 
        trigger, 
        direction = 'bottom left',
        children
    } = props


    const optionClasses = [mapDirectionClass[direction]]
    return (
        <Popover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <Popover.Button className={popupCls.trigger}>
                {trigger}
            </Popover.Button>

            <Popover.Panel 
                className={classNames(cls.popoverPanel, {}, optionClasses)}   >
                {children}
            </Popover.Panel>
        </Popover>
    )
}