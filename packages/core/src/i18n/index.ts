import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from '../locales/en/common.json';
import commonZh from '../locales/zh/common.json';

export const defaultNS = 'common';

export const resources = {
  en: {
    common: commonEn,
  },
  zh: {
    common: commonZh,
  },
} as const;

i18n.use(initReactI18next).init({
  defaultNS,
  fallbackNS: ['common'],
  resources,
  lng: 'en', // 默认语言
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
