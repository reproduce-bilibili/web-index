import { computed, ref, Ref } from 'vue';
import {
  useDomEventListener,
  UseDomEventListenerOptions,
} from './domEventListener';

interface UseFocusOptions {
  target?: Ref<HTMLElement | undefined>;
  cb?: (
    ev: Parameters<UseDomEventListenerOptions<HTMLElement, 'focus'>['cb']>[0],
    type: 'blur' | 'focus',
  ) => any;
}

export const useFocus = (options?: UseFocusOptions) => {
  const { target = ref(), cb } = options || {};

  const _isFocus = ref(false);
  const isFocus = computed(() => _isFocus.value);

  const _cb =
    (
      type: 'focus' | 'blur',
    ): UseDomEventListenerOptions<HTMLElement, 'focus'>['cb'] =>
    (ev) => {
      if (type === 'focus') _isFocus.value = true;
      else if (type === 'blur') _isFocus.value = false;
      cb?.(ev, type);
    };

  const focus = () => target.value?.focus();
  const blur = () => target.value?.blur();

  const { pause: pauseFocus, resume: resumeFocus } = useDomEventListener({
    target,
    event: 'focus',
    cb: _cb('focus'),
  });
  const { pause: pauseBlur, resume: resumeBlur } = useDomEventListener({
    target,
    event: 'blur',
    cb: _cb('blur'),
  });

  return {
    target,
    isFocus,
    focus,
    blur,
    pause: () => {
      pauseBlur();
      pauseFocus();
    },
    resume: () => {
      resumeBlur();
      resumeFocus();
    },
  };
};
