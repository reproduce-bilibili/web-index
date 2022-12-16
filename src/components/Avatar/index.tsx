import { makePanelProps } from '@/composables/panel';
import { makeUserInfoProps } from '@/composables/userInfo';
import { genericComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
import { computed, PropType } from 'vue';
import './index.scss';

const tagMap = {
  vip: '/s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/big-vip.svg',
  business: '/s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/business.svg',
  personal: '/s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/personal.svg',
};

export const Avatar = genericComponent()({
  props: {
    ...makePanelProps({
      title: undefined,
    }),
    ...makeUserInfoProps(),
    showTag: {
      type: [Boolean, String] as PropType<true | false | keyof typeof tagMap>,
      default: false,
    },
  },

  setup(props) {
    const tagUrl = computed(() =>
      props.showTag === true
        ? props.userInfo.isBusiness
          ? tagMap['business']
          : props.userInfo.isPersonal
          ? tagMap['personal']
          : props.userInfo.isVip
          ? tagMap['vip']
          : undefined
        : props.showTag === false
        ? null // @ts-ignore
        : tagMap[props.showTag],
    );
    useRender(() => (
      <div class={['b-avatar']}>
        <div class={['b-avatar__content']} v-img={props.src}></div>
        {tagUrl.value ? (
          <div class="b-avatar__vip" v-img={tagUrl.value}></div>
        ) : null}
      </div>
    ));
  },
});

export type Avatar = InstanceType<typeof Avatar>;
