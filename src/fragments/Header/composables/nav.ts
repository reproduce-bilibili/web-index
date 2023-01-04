import { ComputedRef, inject, provide } from 'vue';

export const UseNavSymbol = Symbol.for('headerNav');

export type NavState = {
  fixed: boolean;
};

export const provideNavState = (data: ComputedRef<NavState | undefined>) =>
  provide(UseNavSymbol, data);

export const useNavState = () => inject<ComputedRef<NavState>>(UseNavSymbol);
