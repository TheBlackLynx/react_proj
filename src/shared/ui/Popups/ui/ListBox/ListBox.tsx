import { Fragment, ReactNode, useState } from 'react'
import { Listbox as HListbox} from '@headlessui/react';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss'
import { AppButton, classNames } from 'shared';
import { HStack } from '../../../Stack/HStack/HStack';
import { DropDownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';

export interface ListBoxItem {
    value?: string,
    content?: ReactNode,
    disabled?: boolean
}



interface ListBoxProps {
    items?: ListBoxItem[],
    className?: string,
    value?: string,
    defaultValue?: string,
    onChange: <T extends string>(value: T) => void
    readonly?: boolean
    direction?: DropDownDirection
    label?: string

}
const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
]


export const  ListBox = ( props : ListBoxProps) => {
    const {
        value,
        defaultValue,
        onChange,
        items,
        className,
        readonly,
        direction = 'bottom right',
        label

    } = props
    const [selectedPerson, setSelectedPerson] = useState(people[0])


    const optionClasses = [mapDirectionClass[direction]]
    return (
        <HStack gap={'4'}>
            { label && <span>{label}</span>}
            <HListbox 
                as={'div'} 
                disabled={readonly}
                className={classNames(popupCls.popup, {}, [className, popupCls.popup])} 
                value={value} 
                onChange={onChange}>

                <HListbox.Button 
                    className={popupCls.trigger} 
                    // disabled={readonly} 
                >
                    <AppButton
                        disabled={readonly}   
                    >
                        {value ?? defaultValue}

                    </AppButton>
                </HListbox.Button>
           
                <HListbox.Options
                    className={classNames(cls.options, {}, optionClasses)}   
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, {[popupCls.active]: active, 
                                    [cls.unavailable]: item.disabled}, )} 
                                >
                                    {selected && '!!!'}
                                    {item.value}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    )
}