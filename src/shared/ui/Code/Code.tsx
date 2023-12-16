import cls from './Code.module.scss';
import { memo, useCallback } from 'react';
import { AppButton, classNames, Icon } from '@/shared';
import CopyIcon from '../../../shared/assets/icons/copy.svg';
import { AppButtonTheme } from '../AppButton/AppButton';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <pre>
            <div className={classNames(cls.Code, {}, [className])}>
                <AppButton
                    className={cls.copyBtn}
                    buttonTheme={AppButtonTheme.CLEAR}
                    onClick={onCopy}
                    fullWidth={null}
                >
                    <Icon Svg={CopyIcon} className={cls.icon} />
                </AppButton>
                <code>{text}</code>
            </div>
        </pre>
    );
});
