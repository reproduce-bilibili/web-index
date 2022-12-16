import { propsFactory } from '@/utils/propsFactory';
import type { PropType } from 'vue';

export interface ItemTypeProps {
  type: 'live' | 'video' | 'read';
}

export const makeItemTypeProps = propsFactory({
  type: {
    type: String as PropType<ItemTypeProps['type']>,
    required: true,
  },
});
