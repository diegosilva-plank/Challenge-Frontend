import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from './locales/en/translations.json'
import * as pt from './locales/pt/translations.json'
import * as jp from './locales/jp/translations.json'

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
        en: {
            translations: en
        },
        pt: {
            translations: pt
        },
        jp: {
            translations: jp
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en', 'pt', 'jp'];

export default i18n;