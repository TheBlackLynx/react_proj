import { createSelector } from "@reduxjs/toolkit";
import AboutIcon from '@/shared/assets/icons/list.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/Profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import { SidebarItemType } from "../types/sidebar";
import { getUserAuthData } from "@/entities/User";
import {  getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from "@/shared/const/router";


export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Главная',
                icon: MainIcon,
                authOnly: false
            },
            {
                path: getRouteAbout(),
                text: 'О сайте',
                icon: AboutIcon,
                authOnly: false
            },
        ]
        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData?.id),
                    text: 'Профиль пользователя',
                    icon: ProfileIcon,
                    authOnly: true
                },
                {
                    path: getRouteArticles(),
                    text: 'Статьи',
                    icon: ArticlesIcon,
                    authOnly: true
                }
            );
        }

        return sidebarItemsList;
    },);