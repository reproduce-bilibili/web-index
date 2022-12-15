import { isVisible, mutableShallowCopy, toRaws } from '@/utils/helpers';
import { entries, throttle } from 'lodash';
import { computed, onBeforeUnmount, Ref, ref, toRaw, watch } from 'vue';

export type Options<T> = T & { targetRef?: Ref<Element | undefined> };

export const useMutationObserver = (
  cb: MutationCallback,
  options: Options<MutationObserverInit> = { attributes: true },
) => {
  const targetRef = options?.targetRef || ref<Element>();
  let observer: null | MutationObserver = null;

  const beforeUnmount = () => {
    observer?.disconnect();
    observer = null;
    if (targetRef.value) {
      delete targetRef.value.__b_mutation_observer__;
    }
  };

  onBeforeUnmount(beforeUnmount);

  watch(
    targetRef,
    (v, ov) => {
      if (ov) beforeUnmount();
      if (v) {
        v.__b_mutation_observer__ = observer = new MutationObserver(cb);
        observer.observe(v, options);
      }
    },
    { immediate: true },
  );
  return {
    targetRef,
  };
};

export const useResizeObserver = (
  cb: ResizeObserverCallback,
  options?: Options<ResizeObserverOptions>,
) => {
  const targetRef = options?.targetRef || ref<Element>();

  let observer: ResizeObserver = new ResizeObserver((...args) => {
    cb(...args);
  });

  const beforeUnmount = () => {
    observer.disconnect();
    if (targetRef.value) {
      delete targetRef.value.__b_resize_observer__;
    }
  };

  onBeforeUnmount(beforeUnmount);

  watch(
    targetRef,
    (v, ov) => {
      if (ov) observer.unobserve(ov);
      if (v) {
        v.__b_resize_observer__ = observer;
        observer.observe(v, options);
      }
    },
    { immediate: true },
  );

  return {
    targetRef,
  };
};

export type UseRectObserverCallBack = (v: {
  rect: DOMRect;
  el: Element;
}) => void;

export interface UseRectObserverOptions {
  // updateOnHidden?: boolean;
}

export const useRectObserver = (
  cb?: UseRectObserverCallBack,
  options?: Options<UseRectObserverOptions>,
) => {
  const visible = ref(false);

  const targetRef = options?.targetRef || ref<Element>();

  useResizeObserver(
    (entries) => {
      const [entry] = entries;
      visible.value = isVisible(entry.target);
    },
    { targetRef },
  );

  useMutationObserver(
    (entries) => {
      const [entry] = entries;
      visible.value = isVisible(entry.target as Element);
    },
    { targetRef, attributes: true },
  );

  watch(targetRef, (v) => v && (visible.value = isVisible(v)), {
    immediate: true,
  });

  const stopFlag = ref(false);
  let aid: number | null = null;

  function _stop() {
    stopFlag.value = true;
  }

  function run() {
    console.log('run')
    aid = window.requestAnimationFrame(() => {
      targetRef.value && (visible.value = isVisible(targetRef.value));
      if (runAble.value && !stopFlag.value && controlFlag.value) {
        if (rect.value) {
          mutableShallowCopy(
            rect.value,
            targetRef.value!.getBoundingClientRect(),
          );
        } else {
          rect.value = mutableShallowCopy(
            {},
            targetRef.value!.getBoundingClientRect(),
          );
        }
        aid = window.requestAnimationFrame(run);
      } else if (aid) window.cancelAnimationFrame(aid);
    });
  }

  function _start() {
    stopFlag.value = false;
    run();
  }

  const runAble = computed(() => {
    return targetRef.value && visible.value;
  });
  watch(runAble, (v) => (v ? _start() : _stop()), {
    immediate: true,
    flush: 'pre',
  });

  const controlFlag = ref(true);
  const start = () => {
    controlFlag.value = true;
    run();
  };
  const stop = () => (controlFlag.value = false);

  const rect = ref<DOMRect>();
  const resData = computed(() =>
    rect.value && targetRef.value
      ? { rect: rect.value, el: targetRef.value }
      : null,
  );
  watch(
    resData,
    (res) => {
      // 确保 visible 是最新的
      setTimeout(() => {
        if (res && visible.value)
          cb?.(toRaws(res));
      });
    },
    {
      immediate: true,
      deep: true,
      flush: 'pre',
    },
  );

  onBeforeUnmount(_stop);

  return {
    targetRef,
    rect,
    stop,
    start,
    visible,
  };
};

export type WindowSize = Pick<Window, typeof windowInNeedProps[number]>;

export type UseWindowSizeObserverCallback = (
  event: WindowEventMap['resize'],
  windowSize: WindowSize,
) => void;

export interface UseWindowSizeObserverOptions {
  throttleDelay: number;
}

const windowInNeedProps = [
  'innerHeight',
  'innerWidth',
  'outerHeight',
  'outerWidth',
] as const;

export const useWindowSizeObserver = (
  cb?: UseWindowSizeObserverCallback,
  options: UseWindowSizeObserverOptions = { throttleDelay: 50 },
) => {
  const windowSize = ref(mutableShallowCopy({}, window, windowInNeedProps));
  window.addEventListener(
    'resize',
    throttle<(this: Window, ev: WindowEventMap['resize']) => any>((event) => {
      mutableShallowCopy(windowSize.value, window, windowInNeedProps);
      cb?.(event, toRaw(windowSize.value));
    }, options.throttleDelay),
  );
  return {
    windowSize,
  };
};
