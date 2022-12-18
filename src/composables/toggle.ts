import { computed, ref } from 'vue';

export const useToggle = () => {
  const _isActive = ref(false);
  const toggle = () => (_isActive.value = !_isActive.value);
  const turnOn = () => (_isActive.value = true);
  const turnOff = () => (_isActive.value = false);
  const setActive = (active: boolean) => _isActive.value = active;
  return {
    isActive: computed(() => _isActive.value),
    turnOff,
    turnOn,
    toggle,
    setActive,
  };
};
