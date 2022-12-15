import { useI18n } from 'vue-i18n';
import { options as i18nOptions } from '@/i18n';
import type { UseI18nOptions } from 'vue-i18n';

const useI18nGlobal = (options?: UseI18nOptions) =>
  useI18n({ ...i18nOptions, ...options, useScope: 'global' });

export default useI18nGlobal;
