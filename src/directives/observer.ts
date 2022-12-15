import type { Directive } from 'vue';

const observer: Directive<
  HTMLElement & { __b_observer__?: MutationObserver },
  { cb: MutationCallback; options?: MutationObserverInit }
> = {
  mounted(el, { value: { cb, options } }) {
    if (el && typeof cb === 'function') {
      el.__b_observer__ = new MutationObserver(cb);
      el.__b_observer__.observe(el, options);
    }
  },
  beforeUnmount(el) {
    el.__b_observer__?.disconnect();
    delete el.__b_observer__;
  },
};

export default observer;
