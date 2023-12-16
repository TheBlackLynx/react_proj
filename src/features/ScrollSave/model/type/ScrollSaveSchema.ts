//<адрес страницы, позиция скрола от верхнего края страницы>

export type ScrollSaveType = Record<string, number>;

export interface ScrollSaveSchema {
    scroll: ScrollSaveType;
}
