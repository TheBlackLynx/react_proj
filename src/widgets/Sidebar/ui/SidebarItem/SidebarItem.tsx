import { getUserAuthData } from "@/entities/User";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { AppLink } from "@/shared";
import { AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { SidebarItemType } from "@/widgets/Sidebar/model/types/sidebar";
import cls from './SidebarItem.module.scss'
interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}
export const SidebarItem = (props: SidebarItemProps) => {
    const {t} = useTranslation();
    const { collapsed, item } = props;
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth)
    {
        return null;
    }

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