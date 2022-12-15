import { toRaw } from 'vue';

export function toKebabCase(str = '') {
  return str
    .replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase();
}

export type ArrayElement<T> = T extends (infer U)[] ? U : null;

export function mutableShallowCopy<
  S extends Record<any, any> = any,
  T extends S = S,
>(source: S, target: T): T;
export function mutableShallowCopy<
  S extends Record<any, any> = any,
  T extends S = S,
  F = Array<keyof T>,
>(source: S, target: T, filter?: F): Pick<T, F[any]>;
export function mutableShallowCopy<
  S extends Record<any, any> = any,
  T extends S = S,
  F extends Array<keyof T> = Array<keyof T>,
>(source: S, target: T, filter?: F): Pick<T, F[any]> {
  if (filter?.length) {
    for (let k of filter) {
      source[k] = target[k];
    }
  } else {
    for (let k in target) {
      source[k] = target[k];
    }
  }
  return source;
}

export const toRaws = (target: any) => {
  target = { ...target };
  for (let k in target) {
    target[k] = toRaw(target[k]);
  }
  return target;
};

export const toFixed = (target: number, index: number = 1): number => {
  return +target.toFixed(index >> 0);
};

export const isVisible = (target: Element) => {
  let res = true;
  for (let cur = target; !!cur; cur = cur.parentElement as Element) {
    if (cur) {
      if (window.getComputedStyle(cur).display === 'none') {
        res = false;
        break;
      }
    }
  }
  return res;
};
