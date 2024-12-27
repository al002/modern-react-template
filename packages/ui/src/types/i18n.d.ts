export interface UiTranslations {
  loginForm: typeof import('../locales/en/login-form.json');
}

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      ui: UiTranslations;
    };
  }
}
