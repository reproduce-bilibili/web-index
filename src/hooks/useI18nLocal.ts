import useI18nGlobal from './useI18nGlobal';
import type { UseI18nOptions } from 'vue-i18n';

const useI18nLocal = (options?: UseI18nOptions) =>
  useI18nGlobal({ ...options, useScope: 'local' });

export default useI18nLocal;
