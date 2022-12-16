import { propsFactory } from '@/utils/propsFactory';
import type { PropType } from 'vue';

export const makeTabTypeProps = propsFactory({
  type: {
    type: String as PropType<'live' | 'video' | 'read'>,
    required: true,
  },
});
