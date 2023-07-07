import { createSelector } from "@reduxjs/toolkit";
import AboutIcon from '@/shared/assets/icons/list.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/Profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { SidebarItemType } from "../types/sidebar";
import { getUserAuthData } from "@/entities/User";


export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        
        const sidebarItemsList: SidebarItemType[] = [
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
        ]
        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData?.id,
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
            );
        }

        return sidebarItemsList;
    },);