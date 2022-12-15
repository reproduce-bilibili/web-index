import { createI18n, UseI18nOptions } from 'vue-i18n';

export const options: UseI18nOptions = {
  locale: 'zh-cn',
  fallbackLocale: 'en',
};

const i18n = createI18n({ ...options, legacy: false });

export default i18n;
