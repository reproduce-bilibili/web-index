import { ImgProps } from '@/composables/img';
import { InfoPropsSimple } from '@/composables/itemInfo';
import { LinkProps } from '@/composables/link';

export type Item = Pick<LinkProps, 'href'> &
  InfoPropsSimple &
  ImgProps & {
    duration: string;
  };
