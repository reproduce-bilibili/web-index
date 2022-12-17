import { ImgProps } from '@/composables/img';
import { LinkProps } from '@/composables/link';
import { UserInfoSimpleProps } from '@/composables/userInfo';
import { InfoPropsSimple } from '@/composables/itemInfo';

export type Item = Pick<LinkProps, 'href'> &
  UserInfoSimpleProps &
  InfoPropsSimple &
  ImgProps & {
    checked: boolean;
  };
