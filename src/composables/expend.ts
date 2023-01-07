import {
  computed,
  ComputedRef,
  CSSProperties,
  Ref,
  ref,
  watch,
  WatchSource,
  nextTick,
} from 'vue';
import { useResizeObserver } from './observer';
import { useRaf } from './requestAnimationFrame';
import { useToggle } from './toggle';

export interface UseExpendOptions<T extends any> {
  target?: Ref<HTMLElement | undefined>;
  maxSize: number;
  direction?: 'y' | 'x';
  source?: WatchSource<T> | T;
  expendMaxSize?: number;
}

export const useExpend = <T extends any>(options: UseExpendOptions<T>) => {
  const {
    target = ref(),
    direction = 'y',
    maxSize,
    source,
    expendMaxSize,
  } = options;

  const scrollSizePropName: keyof HTMLElement =
    direction === 'y' ? 'scrollHeight' : 'scrollWidth';

  const { isActive: expended, setActive: setExpended, toggle } = useToggle();
  const scrollSize = ref(0);
  const needExpend = computed(() => scrollSize.value > maxSize);

  const updateScrollSize = (target?: HTMLElement) =>
    (scrollSize.value = target?.[scrollSizePropName] || scrollSize.value);

  if (!source) {
    useRaf(() => updateScrollSize(target.value));
  } else {
    watch(source, () => nextTick(() => updateScrollSize(target.value)));
  }
  useResizeObserver((e) => updateScrollSize(e[0].target as HTMLElement), {
    targetRef: target,
  });

  const maxSizePropName: keyof CSSProperties =
    direction === 'y' ? 'max-height' : 'max-width';
  const targetStyle: ComputedRef<CSSProperties> = computed(() => {
    if ((needExpend.value && !expended.value) || !needExpend.value)
      return { [maxSizePropName]: `${maxSize}px` };
    else
      return expendMaxSize ? { [maxSizePropName]: `${expendMaxSize}px` } : {};
  });

  return {
    needExpend,
    expended,
    setExpended,
    toggle,
    targetStyle,
    target,
  };
};
