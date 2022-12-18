import { getCurrentScope, onScopeDispose, ref } from 'vue';

export interface UseRafOptions {
  immediate?: boolean;
}

// 参考自 https://github.com/vueuse/vueuse/blob/main/packages/core/useRafFn/index.ts
export const useRaf = (
  cb: (args: { timestamp: DOMHighResTimeStamp; duration: number }) => void,
  options: UseRafOptions = {},
) => {
  const { immediate = true } = options;

  const isActive = ref(false);
  let previousFrameTimestamp = 0;
  let rafId: null | number = null;

  function loop(timestamp: DOMHighResTimeStamp) {
    if (!isActive.value || !window) return;

    const duration = timestamp - previousFrameTimestamp;
    cb({ duration, timestamp });

    previousFrameTimestamp = timestamp;
    rafId = window.requestAnimationFrame(loop);
  }

  function resume() {
    if (!isActive.value && window) {
      isActive.value = true;
      rafId = window.requestAnimationFrame(loop);
    }
  }

  function pause() {
    isActive.value = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  if (immediate) resume();

  if (getCurrentScope()) onScopeDispose(pause);

  return {
    isActive,
    pause,
    resume,
  };
};
