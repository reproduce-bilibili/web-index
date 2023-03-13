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

export function addEventListeners<
  T extends HTMLElement,
  E extends keyof HTMLElementEventMap,
>(target: T, event: E[], cb: (ev: HTMLElementEventMap[E]) => void): void;
export function addEventListeners<
  T extends HTMLElement,
  E extends keyof HTMLElementEventMap,
>(target: T, event: E, cb: (ev: HTMLElementEventMap[E]) => void): void {
  const _event = (Array.isArray(event) ? event : [event]) as E[];
  _event.forEach((e) => {
    target.addEventListener(e, cb);
  });
}

export function removeEventListeners<
  T extends HTMLElement,
  E extends keyof HTMLElementEventMap,
>(target: T, event: E[], cb: (ev: HTMLElementEventMap[E]) => void): void;
export function removeEventListeners<
  T extends HTMLElement,
  E extends keyof HTMLElementEventMap,
>(target: T, event: E, cb: (ev: HTMLElementEventMap[E]) => void): void {
  const _event = (Array.isArray(event) ? event : [event]) as E[];
  _event.forEach((e) => {
    target.removeEventListener(e, cb);
  });
}

export const splitArrByCount = <T extends any>(
  arr: T[],
  count: number,
): Array<Array<T>> => {
  if (count === 1 || arr.length <= 1) return [arr.slice()];
  const res: Array<Array<T>> = [];
  for (let i = 0; i < arr.length; i += count) {
    res.push(arr.slice(i, i + count));
  }
  return res;
};

export const hasLetters = (s: string) => /[a-z,A-Z]/.test(s);

export const clearHttpPrefix = (s: string) =>
  s.replace('http://', '').replace('https://', '');
