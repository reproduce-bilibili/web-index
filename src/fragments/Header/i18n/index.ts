import type { UseI18nOptions } from 'vue-i18n';
import zhCn from './zh-cn';
import en from './en';

export default <UseI18nOptions>{
  messages: {
    'zh-cn': zhCn,
    en,
  },
};
