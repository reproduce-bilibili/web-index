import { createApp } from 'vue';
import './style.scss';
import 'normalize.css';
import App from './App.vue';
import i18n from './i18n';
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';
import { registerCmd } from './directives';
import { createFloatVueTheme } from './utils/createFloatVueTheme';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';

import 'virtual:svg-icons-register';

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const app = createApp(App);

app.use(i18n);

app.use(FloatingVue, {
  themes: {
    ...createFloatVueTheme('header-card'),
  },
});

registerCmd(app);

app.mount('#app');
