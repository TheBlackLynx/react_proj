import { getAddNewCommentFormError, getAddNewCommentFormText }
    from '@/features/AddNewComment/model/selectors/addNewCommentFormSelectors';
import { addNewCommentFormActions, addNewCommentFormReducer } 
    from '@/features/AddNewComment/model/slice/addNewCommentForm';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppButton, classNames, HStack, Input, Text } from '@/shared';
import { DynamicModuleLoader, ReducerList } 
    from '@/shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AppButtonTheme } from '@/shared/ui/AppButton/AppButton';
import cls from './AddNewCommentForm.module.scss'

export interface AddNewCommentFormProps {
    className?: string,
    onSendComment: (text: string) => void
}
export const AddNewCommentForm = memo((props: AddNewCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation('comments');


    const text = useSelector(getAddNewCommentFormText)
    const error = useSelector(getAddNewCommentFormError)
    const dispatch = useAppDispatch();
    const reducers: ReducerList = {
        addNewCommentForm: addNewCommentFormReducer
    }

    const onCommentTextChange = useCallback((value: string) => {
        console.log('text!!!!', text);
        
        dispatch(addNewCommentFormActions.setNewComment(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');

    }, [onSendComment, onCommentTextChange, text])
    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack justify={"between"} max
                className={classNames(cls.AddNewCommentForm, {}, [className])}>
                <Input
                    className={cls.Input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <AppButton 
                    buttonTheme={AppButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </AppButton>
            </HStack>
        </DynamicModuleLoader>
    )
});

export default AddNewCommentForm;
