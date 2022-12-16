import { propsFactory } from '@/utils/propsFactory';

export interface InfoProps {
  title: string;
  date: string;
  name: string;
}

export const makeInfoProps = propsFactory({
  title: String,
  date: String,
  name: String,
});
