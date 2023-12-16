import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ScrollSaveType } from '../../type/ScrollSaveSchema';

export const getScrollPosition = (state: StateSchema): ScrollSaveType => {
    return state?.scroll?.scroll as ScrollSaveType;
};

export const getScrollPositionByPath = createSelector(
    getScrollPosition,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
