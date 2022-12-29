import { useTranslation } from "react-i18next";
import { AppLink } from "shared";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import cls from './SidebarItem.module.scss'
interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}
export const SidebarItem = (props: SidebarItemProps) => {
    const {t} = useTranslation();
    const { collapsed, item } = props;
   
    return (
        <div className={cls.item}>
            {
                collapsed ?
                    <AppLink 
                        to={item.path}  
                    >
                        <item.icon className={cls.icon} />
                    </AppLink>
                    :
                    <AppLink 
                        to={item.path} 
                        theme={AppLinkTheme.PRIMARY} 
                        className={cls.linkItem}
                    >
                        {item.text}
                    </AppLink>
            }
        </div>
    );
}