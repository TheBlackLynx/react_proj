import { memo, useCallback, useState } from 'react';
import cls from './RatingCard.module.scss';
import { Card, VStack, classNames, Text, Input, HStack, AppButton, AppButtonTheme } from '@/shared';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { ButtonL } from '@/shared/ui/AppButton/AppButton.stories';
import { AppButtonSize } from '@/shared/ui/AppButton/AppButton';

interface RatingCardProps {
    className: string | null;
    title: string | null;
    feedBackTitle: string | null;
    hasFeebBack: boolean | null;
    onCancel: ((starCount: number) => void) | null;
    onAccept: ((starCount: number, feebBack?: string) => void) | null;

}
export const RatingCard = memo((props: RatingCardProps) => {
    const { 
        className,
        title, 
        feedBackTitle,
        hasFeebBack,
        onAccept,
        onCancel
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');



    
    const onSelectStars = useCallback((selectedStars: number) => {
        setStarsCount(selectedStars);
        if (hasFeebBack){
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStars)
        }
        
    }, [hasFeebBack, onAccept]);


    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback)
    }, [onAccept, feedback, starsCount])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <>
            <Text title={feedBackTitle?? ''}/>
            <Input 
                value={feedback}
                onChange={setFeedback} 
                placeholder={'Напишите отзыв'} /> 
        </>
    )

    return (
        <Card className={classNames(cls.RatingCard, {}, [className?? ''])}>
            <VStack gap={'8'} align={'center'} >
                <Text title={title?? ''} />
                <StarRating className={null} onSelect={onSelectStars} size={40} selectedStars={0}/>
            </VStack>
           
            <BrowserView>
                <Modal 
                    isOpen={isModalOpen} 
                    lazy={false} 
                    className={cls.Modal} 
                    onClose={cancelHandle}>
                    <VStack max gap={'32'}>
                        {modalContent}
                        <HStack max gap={'16'} justify={'end'}> 
                            <AppButton 
                                buttonTheme={AppButtonTheme.OUTLINE_RED} 
                                onClick={cancelHandle}
                                fullWidth={false}>
                                {t('Cancel')}
                            </AppButton>
                            <AppButton onClick={acceptHandle} fullWidth={false}>
                                {t('Send')}
                            </AppButton>
                        </HStack> 
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer 
                    isOpen={isModalOpen}
                    lazy={false} 
                    className={cls.Modal} 
                    onClose={cancelHandle}>
                    <VStack gap={'32'}>
                        {modalContent}
                        <AppButton onClick={acceptHandle} size={AppButtonSize.XL} fullWidth={true}>
                            {t('Send')}
                        </AppButton>

                    </VStack>    
                </Drawer>
                
            </MobileView>
        </Card>
    )
});