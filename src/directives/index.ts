import type { App } from 'vue';
import img from './img';
import clickOutside from './clickOutside';

export const registerCmd = (app: App<Element>) => {
  app.directive('img', img);
  app.directive('clickOutside', clickOutside);
};
