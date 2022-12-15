import { gsap } from 'gsap';
import { computed, nextTick, ref, Ref, shallowRef } from 'vue';
import { Coordinate, getCoordinate } from './coordinate';

export interface UseTransitionProps {
  source?: Ref<Element | undefined>;
  target?: Ref<Element | undefined>;
}

export interface UseTransitionOptions {
  delay?: number;
  duration?: number;
  fadeDuration?: number;
  isActive?: boolean;
}

const getScale = (
  cSource: Coordinate,
  cTarget: Coordinate,
  sScale: number = 1,
  tScale: number = 1,
) => {
  const sw = cSource.rect.width * sScale;
  const sh = cSource.rect.height * sScale;
  const tw = cTarget.rect.width * tScale;
  const th = cTarget.rect.height * tScale;
  if (tw > sw) {
    if (th <= sh) return sw / tw;
    else return Math.min(sw / tw, sh / th);
  } else {
    if (th >= sh) return sh / th;
    else return Math.min(sw / tw, sh / th);
  }
};

export const useTransition = (
  props: UseTransitionProps,
  options: UseTransitionOptions = {
    delay: 0,
    fadeDuration: 0.2,
    duration: 0.3,
    isActive: false,
  },
) => {
  const {
    source: sourceRef = ref<Element>(),
    target: targetRef = ref<Element>(),
  } = props;

  const gsapTl = shallowRef<ReturnType<typeof gsap['timeline']>>(
    gsap.timeline(),
  );

  const _isActive = ref(options.isActive);

  const _status = ref<'running' | 'stop'>('stop');

  const getGsapTl = async ({
    target,
    source,
    cSource,
    cTarget,
    fadeDuration,
    delay,
    duration,
  }: {
    target: Element;
    source: Element;
    cSource: Coordinate;
    cTarget: Coordinate;
  } & UseTransitionOptions) =>
    gsap
      .timeline()
      .fromTo(
        target,
        {
          opacity: 0,
        },
        {
          delay: delay,
          duration: fadeDuration,
          opacity: 1,
        },
      )
      .fromTo(
        source,
        {
          opacity: 1,
        },
        {
          delay: delay,
          duration: fadeDuration,
          opacity: 0,
        },
        '<',
      )
      .fromTo(
        target,
        {
          borderRadius: window.getComputedStyle(source).borderRadius,
          x:
            cSource.center.x -
            cTarget.center.x -
            (cSource.rect.width - cTarget.rect.width) / 2,
          y:
            cSource.center.y -
            cTarget.center.y +
            (cSource.rect.height - cTarget.rect.height) / 2,
          width: cSource.rect.width,
          height: cSource.rect.height,
        },
        {
          delay: fadeDuration || 0 + (delay || 0),
          duration: duration,
          borderRadius: window.getComputedStyle(target).borderRadius,
          x: 0,
          y: 0,
          width: cTarget.rect.width,
          height: cTarget.rect.height,
          immediateRender: true,
          ease: 'expo.out',
        },
        '<',
      );

  const start = async () => {
    if (gsapTl.value.isActive() || _status.value === 'running') {
      return;
    }
    _isActive.value = true;
    _status.value = 'running';

    await nextTick(async () => {
      if (targetRef.value && sourceRef.value) {
        const cSource = getCoordinate(sourceRef.value, window);
        const cTarget = getCoordinate(targetRef.value, window);
        gsapTl.value = (await getGsapTl({
          source: sourceRef.value,
          target: targetRef.value,
          cSource,
          cTarget,
          ...options,
        })) as ReturnType<typeof gsap['timeline']>;
        _status.value = 'stop';
      }
    });
  };

  const stop = async () => {
    if (gsapTl.value.isActive() || _status.value === 'running') {
      return;
    }
    _status.value = 'running';
    await gsapTl.value.reverse();
    await gsapTl.value.revert();
    _status.value = 'stop';
    _isActive.value = false;
  };

  const toggle = () => {
    if (!_isActive.value) start();
    else stop();
  };

  return {
    show: start,
    hide: stop,
    toggle,
    status: computed(() => _status.value),
    isActive: computed(() => _isActive.value),
    targetRef,
    sourceRef,
  };
};
