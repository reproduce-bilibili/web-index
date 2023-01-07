import { computed, ref } from 'vue';

export interface UseToggleOptions {
  default?: boolean;
}

export const useToggle = (options: UseToggleOptions = { default: false }) => {
  const _isActive = ref(options.default);
  const toggle = () => (_isActive.value = !_isActive.value);
  const turnOn = () => (_isActive.value = true);
  const turnOff = () => (_isActive.value = false);
  const setActive = (active: boolean) => (_isActive.value = active);
  return {
    isActive: computed(() => _isActive.value),
    turnOff,
    turnOn,
    toggle,
    setActive,
  };
};
