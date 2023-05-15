import { Fragment, ReactNode, useState } from 'react'
import { Listbox as HListbox} from '@headlessui/react';
import cls from './ListBox.module.scss';
import { AppButton, classNames } from 'shared';
import { HStack } from '../Stack';
import { DropDownDirection } from 'shared/types/ui';

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

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight
}

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
                className={classNames(cls.ListBox, {}, [className])} 
                value={value} 
                onChange={onChange}>

                <HListbox.Button 
                    className={cls.trigger} 
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
                                <li className={classNames(cls.item, {[cls.active]: active, 
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