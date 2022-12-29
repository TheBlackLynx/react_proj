import { memo } from 'react';
import {Loader} from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss'

export const PageLoader = memo(() => {
    return (
        <div className={cls.pageLoader}>
            <Loader />
        </div>
    )
})