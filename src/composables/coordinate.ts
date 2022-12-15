import { toFixed } from '@/utils/helpers';
import { computed, ComputedRef, Ref, watch } from 'vue';
import {
  Options,
  useRectObserver,
  UseRectObserverOptions,
  useWindowSizeObserver,
  WindowSize,
} from './observer';

interface UseCoordinateProps {}

interface CenterInfo {
  x: number;
  y: number;
  top: number;
  bottom: number;
  left: number;
  right: number;
}

interface RectInfo {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Coordinate {
  center: CenterInfo;
  rect: RectInfo;
}

type UseCoordinateCallback = (coordinate?: Coordinate) => void;

type UseCoordinateOptions = Options<{}>;

type UseCoordinateReturns = {
  coordinate: ComputedRef<Coordinate | undefined>;
  targetRef: Ref<Element | undefined>;
} & Pick<ReturnType<typeof useRectObserver>, 'start' | 'stop' | 'visible'>;

export const getCoordinate = (
  target: Element | DOMRect,
  window: WindowSize,
): Coordinate => {
  const rect =
    target instanceof Element ? target.getBoundingClientRect() : target;
  const _rect: RectInfo = {
    width: toFixed(rect.width),
    height: toFixed(rect.height),
    top: toFixed(rect.top),
    bottom: toFixed(window.innerHeight - rect.bottom),
    left: toFixed(rect.left),
    right: toFixed(window.innerWidth - rect.right),
  };
  const _center: CenterInfo = {
    x: toFixed(rect.left + _rect.width / 2),
    y: toFixed(rect.top + _rect.height / 2),
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };
  _center.top = _center.y;
  _center.bottom = toFixed(window.innerHeight - _center.top);
  _center.left = _center.x;
  _center.right = toFixed(window.innerWidth - _center.left);
  return {
    center: _center,
    rect: _rect,
  };
};

export const useCoordinate = (
  cb?: UseCoordinateCallback,
  options?: UseCoordinateOptions,
): UseCoordinateReturns => {
  const { targetRef, rect, stop, start, visible } = useRectObserver(undefined, {
    targetRef: options?.targetRef,
  });
  const { windowSize } = useWindowSizeObserver();
  const coordinate = computed(() => {
    if (!rect.value) return undefined;
    return getCoordinate(rect.value, windowSize.value);
  });
  watch(coordinate, (v) => cb?.(v), {
    deep: true,
    immediate: true,
    flush: 'pre',
  });
  return {
    coordinate,
    targetRef,
    start,
    stop,
    visible,
  };
};
