import { propsFactory } from '@/utils/propsFactory';
import { PropType } from 'vue';
import { deviceIconMap } from './constant';

export interface InfoPropsSimple {
  title: string;
  date?: string;
  name: string;
}

export const makeInfoPropsSimple = propsFactory({
  title: String,
  date: String,
  name: String,
});

export type InfoPropsSimpleDefault = {
  deviceType: keyof typeof deviceIconMap;
} & InfoPropsSimple;

export const makeInfoPropsDefault = propsFactory({
  ...makeInfoPropsSimple(),
  deviceType: {
    type: String as PropType<keyof typeof deviceIconMap>,
    default: 'pc',
  },
});

export interface ItemTypeProps {
  type: 'live' | 'video' | 'read';
}

export const makeItemTypeProps = propsFactory({
  type: {
    type: String as PropType<ItemTypeProps['type']>,
    required: true,
  },
});
