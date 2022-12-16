import type { Ref } from 'vue';
import { ref } from 'vue';
import { useDomEventListener } from './domEventListener';

export interface UseScrollOptions<T> {
  target?: Ref<T | undefined>;
  cb?: Parameters<typeof useDomEventListener>[0]['cb'];
  boundary?: number;
  onBottom?: (target: T) => any;
  onTop?: (target: T) => any;
}

interface Meta {
  top: number;
  bottom: number;
}

export const useScroll = <T extends HTMLElement>(
  options: UseScrollOptions<T>,
) => {
  const { target = ref(), cb, boundary = 2, onBottom, onTop } = options;

  if (boundary < 0) throw new Error('boundary 必须 >= 0');

  const meta = ref<null | Meta>(null);

  const _cb: typeof cb = (e) => {
    const _target = e.target as T;

    const top = _target.scrollTop;
    const bottom =
      _target.scrollHeight - _target.scrollTop - _target.clientHeight;

    if (!meta.value) {
      meta.value = { top, bottom };
    } else {
      // 只有首次进入边界区域才触发 onTop, onBottom
      if (meta.value.top > boundary && top <= boundary) onTop?.(_target);
      if (meta.value.bottom > boundary && bottom <= boundary)
        onBottom?.(_target);
      meta.value.top = top;
      meta.value.bottom = bottom;
    }

    cb?.(e);
  };

  const listenerReturns = useDomEventListener({
    event: 'scroll',
    target,
    cb: _cb,
    immediate: true,
  });

  return { meta, target, ...listenerReturns };
};
