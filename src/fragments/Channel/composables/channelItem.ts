import { makeLinkProps } from '@/composables/link';
import { propsFactory } from '@/utils/propsFactory';

import type { PropType } from 'vue';
import type { LinkProps } from '@/composables/link';

export const makeChannelItemProps = propsFactory({
  text: String,
  ...makeLinkProps(),
  direction: String as PropType<Item['direction']>,
  subItems: {
    type: Array as PropType<
      Array<
        {
          text: string;
        } & LinkProps
      >
    >,
  },
});

export type Item = {
  text: string;
  subItems?: Array<
    {
      text: string;
    } & LinkProps
  >;
  direction?: 'top' | 'bottom';
} & LinkProps;
