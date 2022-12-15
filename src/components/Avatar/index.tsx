import { makePanelProps } from '@/composables/panel';
import { genericComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
import './index.scss';

export const Avatar = genericComponent()({
  props: {
    ...makePanelProps({
      title: undefined,
    }),
    showVipTag: Boolean,
  },
  setup(props) {
    useRender(() => (
      <div class={['b-avatar']}>
        <div class={['b-avatar__content']} v-img={props.src}></div>
        {!!props.showVipTag ? <div class="b-avatar__vip" v-img="/s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/big-vip.svg"></div> : null}
      </div>
    ));
  },
});

export type Avatar = InstanceType<typeof Avatar>;
