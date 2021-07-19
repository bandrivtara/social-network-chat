import React, {ReactNode} from 'react';
import {IntlProvider} from "react-intl";
import enTranslations from './translations/en.json';
import plTranslations from './translations/pl.json';

export const TBIntlProvider: React.FC<PropsTypes> = ({children}) => {

    const locale = 'pl';

    const allTranslations = {
        en: enTranslations,
        pl: plTranslations
    };

    const messages = allTranslations[locale];

    return (
        <IntlProvider locale={locale} messages={messages}>
            {children}
        </IntlProvider>
    );
};

type PropsTypes = {
    children: ReactNode
}