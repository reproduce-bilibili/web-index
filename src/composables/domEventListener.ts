import type { Ref } from 'vue';

import { watch, ref, onBeforeUnmount } from 'vue';

export interface UseDomEventListenerOptions<T extends HTMLElement, E extends keyof HTMLElementEventMap> {
  event: E;
  target?: Ref<T | undefined>;
  cb: (ev: HTMLElementEventMap[E]) => any;
  immediate?: boolean;
}

export const useDomEventListener = <
  T extends HTMLElement,
  E extends keyof HTMLElementEventMap,
>(
  options: UseDomEventListenerOptions<T, E>,
) => {
  const { target = ref(), event, cb, immediate = false } = options;

  const controlled = ref(false);
  const hasImmediate = ref(false);

  const remove = (t?: T) => t?.removeEventListener(event, cb);
  const add = (t?: T) => t?.addEventListener(event, cb);
  const pause = () => {
    remove(target.value);
    controlled.value = true;
  };
  const resume = () => {
    add(target.value);
    controlled.value = false;
  };

  watch(
    target,
    (v, ov) => {
      if (controlled.value) return;
      if (ov) remove(ov);
      if (v) {
        add(v);
        if (options.immediate && !hasImmediate.value) {
          v.dispatchEvent(new Event(event));
          hasImmediate.value = true;
        }
      }
    },
    {
      immediate: true,
    },
  );

  onBeforeUnmount(() => {
    remove(target.value);
  });

  return {
    pause,
    resume,
  };
};
