import { i18n } from '@myapp/core';
import { uiTranslations } from '../i18n/config';

Object.entries(uiTranslations).forEach(([lng, ns]) => {
  Object.entries(ns).forEach(([namespace, resources]) => {
    i18n.addResourceBundle(lng, namespace, resources, true, true);
  });
});
