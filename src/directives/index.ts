import type { App } from 'vue';
import img from './img';

export const registerCmd = (app: App<Element>) => {
  app.directive('img', img);
};
