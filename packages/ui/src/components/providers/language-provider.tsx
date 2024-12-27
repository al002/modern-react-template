import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '@myapp/core';

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
