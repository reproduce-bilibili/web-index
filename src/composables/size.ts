import { propsFactory } from '@/utils/propsFactory';
import { PropType, SetupContext } from 'vue';

export const makeSizeProps = propsFactory({
  size: {
    type: String as PropType<SizeProps['size']>,
    default: 'sm',
  },
});

export interface SizeProps {
  size: 'sm' | 'md' | 'lg';
}

export interface UseSize {
  cls: string[];
}

export const useSize = (
  props: SizeProps,
  attrs: SetupContext['attrs'],
  { cls }: { cls: string[] } = { cls: [] },
): UseSize => {
  return {
    cls: cls.concat(cls.map((v) => `${v}--${props.size || attrs.size}`)),
  };
};
