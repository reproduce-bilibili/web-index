import { propsFactory } from '@/utils/propsFactory';
import { computed, PropType, SetupContext } from 'vue';

export type Target = '_self' | '_parent' | '_top' | '_blank';

export const makeLinkProps = propsFactory({
  href: String,
  target: {
    type: String as PropType<Target>,
    default: '_blank',
  },
});

export const useLink = (props: LinkProps, attrs: SetupContext['attrs']) => {
  const isLink = computed(() => !!props.href || !!attrs.href);
  return { isLink };
};

export interface LinkProps {
  href?: string;
  target?: Target;
  [key: string]: any;
}
