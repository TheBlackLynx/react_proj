import AboutIcon from 'shared/assets/icons/list.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    icon:  React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        icon: MainIcon
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        icon: AboutIcon
    },
    {
        path: RoutePath.profile,
        text: 'Профиль пользователя',
        icon: ProfileIcon
    },
]