import { isVisible, mutableShallowCopy, toRaws } from '@/utils/helpers';
import { throttle } from 'lodash';
import { computed, onBeforeUnmount, Ref, ref, toRaw, watch } from 'vue';
import { useRaf } from './requestAnimationFrame';

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
  cb?: ResizeObserverCallback,
  options?: Options<ResizeObserverOptions>,
) => {
  const targetRef = options?.targetRef || ref<Element>();
  const entry = ref<ResizeObserverEntry | undefined>();

  let observer: ResizeObserver = new ResizeObserver((...args) => {
    entry.value = args[0][0] || entry.value;
    cb?.(...args);
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
    entry,
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

  const { pause, resume, isActive } = useRaf(() => {
    if (rect.value) {
      mutableShallowCopy(rect.value, targetRef.value!.getBoundingClientRect());
    } else {
      rect.value = mutableShallowCopy(
        {},
        targetRef.value!.getBoundingClientRect(),
      );
    }
  });

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
        if (res && visible.value) cb?.(toRaws(res));
      });
    },
    {
      immediate: true,
      deep: true,
      flush: 'pre',
    },
  );

  return {
    targetRef,
    rect,
    isActive,
    resume,
    pause,
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
