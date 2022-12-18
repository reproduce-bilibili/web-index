import { computed, ref, Ref } from 'vue';
import { useResizeObserver } from './observer';

export interface UseTextOverflowOptions {
  target?: Ref<HTMLElement | undefined>;
}

export const useTextOverflow = (options?: UseTextOverflowOptions) => {
  const _isOverflow = ref(false);

  const checkOverflow = (target: Element) =>
    target.scrollWidth !== target.clientWidth;

  const { targetRef } = useResizeObserver(
    (entry) => entry[0] && (_isOverflow.value = checkOverflow(entry[0].target)),
    {
      targetRef: options?.target,
    },
  );

  return {
    target: targetRef,
    isOverflow: computed(() => _isOverflow.value),
  };
};
