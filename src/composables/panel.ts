import { propsFactory } from '@/utils/propsFactory';

export const makePanelProps = propsFactory({
  title: String,
  src: String,
});

export interface PanelProps {
  title: string;
  src: string;
}
