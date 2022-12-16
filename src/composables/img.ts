import { propsFactory } from '@/utils/propsFactory';

export interface ImgProps {
  src: string;
}

export const makeImgProps = propsFactory({
  src: String,
});
