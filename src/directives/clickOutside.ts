import { addEventListeners, removeEventListeners } from '@/utils/helpers';
import type { Directive } from 'vue';

const eventList: (keyof HTMLElementEventMap)[] = ['mousedown', 'contextmenu'];

const clickOutside: Directive<
  HTMLElement,
  (this: HTMLElement, ev: HTMLElementEventMap[keyof HTMLElementEventMap]) => any
> = {
  mounted(el, { value: cb }) {
    function handler(
      this: HTMLElement,
      ev: HTMLElementEventMap[keyof HTMLElementEventMap],
    ) {
      if (el.contains(ev.target as Node)) return false;
      else if (cb && typeof cb === 'function') cb.call(this, ev);
    }
    if (el) {
      el.__b_click_outside_handler__ = handler;
      addEventListeners(document as any as HTMLElement, eventList, handler);
    }
  },
  beforeUnmount(el) {
    if (el.__b_click_outside_handler__) {
      removeEventListeners(
        document as any as HTMLElement,
        eventList,
        el.__b_click_outside_handler__,
      );
    }
  },
};

export default clickOutside;
