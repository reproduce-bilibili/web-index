export const createFloatVueTheme = (
  name: string,
  options?: Record<string, any>,
) => {
  const res: Record<string, any> = {};
  ['left', 'right', 'top', 'bottom'].forEach((v) => {
    res[`${name}-${v}`] = {
      triggers: ['hover', 'focus'],
      popperTriggers: ['hover', 'focus'],
      autoHide: false,
      placement: v,
      delay: {
        hide: 100,
        show: 10,
      },
      overflowPadding: 10,
      distance: 8,
      ...options,
    };
  });
  return res;
};
