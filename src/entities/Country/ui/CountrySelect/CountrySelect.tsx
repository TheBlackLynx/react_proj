import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean
}

const options = [
    { value: Country.RU, content: Country.RU},
    { value: Country.USA, content: Country.USA},
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { value, onChange, readonly = true } = props;
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])
    return (
        <ListBox
            defaultValue={t('Укажите страну')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction={'top left'}
            label = {t('Укажите страну')}
        />
    )
});