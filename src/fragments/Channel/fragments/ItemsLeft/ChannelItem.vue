<script lang="tsx">
import { computed } from 'vue';
import Graph from '@/components/Graph/index.vue';
import { defineComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
import DropDown from '../../component/DropDown.vue';
import ChannelItemMenu from '../../component/ChannelItemMenu.vue';

import type { CSSProperties } from 'vue';
import { makeChannelItemProps } from '../../composables/channelItem';

export default defineComponent({
  props: {
    ...makeChannelItemProps(),
  },
  emits: ['closeMenu', 'openMenu'],
  setup(props, { attrs, slots, emit }) {
    const hasChar = /[a-z,A-Z]/;
    const style = computed<CSSProperties>(() => ({
      letterSpacing: hasChar.test(props.text || '') ? '0px' : '2px',
    }));

    const renderContent = (
      <Graph
        class="channel-item-left"
        href={props.href}
        target={props.target}
        style={style.value}
        {...attrs}>
        {slots.default?.() || props.text}
      </Graph>
    );
    useRender(() => {
      if (!!props.subItems?.length)
        return (
          <DropDown
            direction={props.direction}
            onApplyShow={() => emit('openMenu')}
            onApplyHide={() => emit('closeMenu')}>
            {{
              default: () => renderContent,
              popper: () => <ChannelItemMenu items={props.subItems} />,
            }}
          </DropDown>
        );
      else return renderContent;
    });
  },
});
</script>

<style lang="scss">
@use '@/style/break-point' as * with($key: channel);
.channel-item-left {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  line-height: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid var(--line_light);
  color: var(--text2);
  font-size: var(--fs2);
  background-color: var(--graph_bg_thin);
  text-align: center;
  user-select: none;
  transition: background-color 0.3s, color 0.3s;

  @include mq($from: xl) {
    font-size: var(--fs3);
  }
  @include mq($until: md) {
    font-size: var(--fs1);
  }

  @include mq($until: sm) {
    line-height: 24px;
    height: 24px;
  }
  @include mq($until: lg) {
    line-height: 28px;
    height: 28px;
  }
}
.channel-item-left:hover {
  color: var(--text1);
  background-color: var(--graph_bg_thick);
}
</style>
