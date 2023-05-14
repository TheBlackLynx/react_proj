import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country';
import { ListBox } from 'shared/ui/ListBox/ListBox';

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
            direction={'top'}
            label = {t('Укажите страну')}
        />
    )
});