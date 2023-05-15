import cls from './DropDown.module.scss';
import { Menu } from '@headlessui/react'
import { Fragment, memo, ReactNode } from 'react';
import { AppLink, classNames } from 'shared';
import { DropDownDirection } from 'shared/types/ui';

export interface DropDownItem {
    disabled?:boolean,
    content?: ReactNode,
    onClick?: () => void
    href?: string

}

interface DropDownProps {
   className?: string;
   items: DropDownItem[];
   trigger: ReactNode,
   direction?: DropDownDirection
}
const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight
}


export const DropDown = memo(( props: DropDownProps ) => {
    const { 
        className, 
        items, 
        trigger, 
        direction = 'bottom right' } = props;
    const menuClasses = [mapDirectionClass[direction]];
    return (
        <Menu as={'div'} className={classNames(cls.DropDown, {}, [className])}>
            <Menu.Button className={cls.dropDownBtn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.dropDownMenu, {}, menuClasses)}>
                {items.map(item => {
                    const content =  ({ active }: {active: boolean}) => (
                        <button 
                            type={'button'}
                            className={classNames(cls.dropDownMenuItem,
                                { [cls.active]: active}, [])}
                            onClick={item.onClick}>
                            {item.content}
                        </button>
                    )
                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink}  to={item.href} 
                                key={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        )
                    }
                    return (
                        <Menu.Item as={Fragment} key={item.href} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
});