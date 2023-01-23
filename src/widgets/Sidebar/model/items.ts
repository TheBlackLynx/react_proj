import AboutIcon from 'shared/assets/icons/list.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    icon:  React.VFC<React.SVGProps<SVGSVGElement>>,
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        icon: MainIcon,
        authOnly: false
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        icon: AboutIcon,
        authOnly: false
    },
    {
        path: RoutePath.profile,
        text: 'Профиль пользователя',
        icon: ProfileIcon,
        authOnly: true
    },
    {
        path: RoutePath.articles,
        text: 'Статьи',
        icon: ArticlesIcon,
        authOnly: true
    }
]