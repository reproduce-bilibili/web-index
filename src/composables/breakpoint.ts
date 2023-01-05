import { useBreakpoints } from '@vueuse/core';

export const useChannelBreakpoints = () =>
  useBreakpoints({
    sm: 1100,
    md: 1367,
    lg: 1700,
    xl: 2200,
  });
