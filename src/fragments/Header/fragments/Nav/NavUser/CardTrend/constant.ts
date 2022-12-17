import { ImgProps } from '@/composables/img';
import { LinkProps } from '@/composables/link';
import { UserInfoSimpleProps } from '@/composables/userInfo';
import { InfoProps } from '../../composables/info';

export type Item = Pick<LinkProps, 'href'> &
  UserInfoSimpleProps &
  InfoProps &
  ImgProps & {
    checked: boolean;
  };
