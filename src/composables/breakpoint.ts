import { useBreakpoints } from '@vueuse/core';

export const useChannelBreakpoints = () =>
  useBreakpoints({
    sm: 1100,
    md: 1367,
    lg: 1700,
    xl: 2200,
  });

export const useRecommendBreakpoints = () =>
  useBreakpoints({
    xs: 1140,
    sm: 1300,
    md: 1400,
    lg: 1560,
    xl: 2060,
  });
