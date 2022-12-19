import { EffectScope, effectScope, getCurrentScope, onScopeDispose } from 'vue';

const tryOnScopeDispose = <F extends () => void>(fn: F) => {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
};

export function createSharedComposable<
  S extends {},
  A extends any[],
  C extends (...args: A) => S,
>(composable: C) {
  let subscribers = 0;
  let state: S | undefined | null, scope: EffectScope | null;

  const dispose = () => {
    if (scope && --subscribers <= 0) {
      scope.stop();
      state = scope = null;
    }
  };

  return (...args: Parameters<C>) => {
    subscribers++;
    if (!state) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    tryOnScopeDispose(dispose);
    return state as ReturnType<C>;
  };
}
