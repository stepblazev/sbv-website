import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import ru from '../assets/locales/russian.json';
import en from '../assets/locales/english.json';

i18next
    .use(initReactI18next)
    .init({
        lng: localStorage.getItem('language') ?? 'ru',
        fallbackLng: 'ru',
        resources: {
            ru: {
                translation: ru,
            },
            en: {
                translation: en,
            },
        },
    });

export default i18next;