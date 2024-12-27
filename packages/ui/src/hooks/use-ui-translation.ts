import { useTranslation } from 'react-i18next';
import { UI_NAMESPACE } from '../i18n/config';

export const useUiTranslation = () => {
  const { t } = useTranslation(UI_NAMESPACE);
  return { t };
};
