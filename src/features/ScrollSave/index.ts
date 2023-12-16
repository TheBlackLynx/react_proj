export type {
    ScrollSaveSchema,
    ScrollSaveType,
} from './model/type/ScrollSaveSchema';

export { getScrollPositionByPath } from './model/selectors/scrollSaveSelectors/scrollSaveSelectors';

export { scrollActions, scrollReducer } from './model/slice/ScrollSaveSlice';
