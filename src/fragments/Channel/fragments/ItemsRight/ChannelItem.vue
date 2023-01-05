<script lang="tsx">
import Graph from '@/components/Graph/index.vue';
import { defineComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
import DropDown from '../../component/DropDown.vue';
import ChannelItemMenu from '../../component/ChannelItemMenu.vue';
import { makeChannelItemProps } from '../../composables/channelItem';
import SvgIcon from '@/components/SvgIcon.vue';

export default defineComponent({
  props: {
    ...makeChannelItemProps(),
    iconName: String,
  },
  setup(props, { slots, attrs }) {
    const renderContent = (
      <Graph
        class="channel-item-right"
        href={props.href}
        target={props.target}
        {...attrs}>
        {props.iconName && (
          <SvgIcon class="channel-item-right__icon" name={props.iconName} />
        )}
        {slots.default?.() || (
          <span class="channel-item-right__text">{props.text}</span>
        )}
      </Graph>
    );
    useRender(() => {
      if (!!props.subItems?.length) {
        return (
          <DropDown direction={props.direction}>
            {{
              default: () => renderContent,
              popper: () => <ChannelItemMenu items={props.subItems} />,
            }}
          </DropDown>
        );
      } else return renderContent;
    });
  },
});
</script>

<style lang="scss">
@use '@/style/break-point' as * with($key: channel);
.channel-item-right {
  display: flex;
  color: var(--text2);
  transition: color 0.3s;
  justify-content: flex-end;
  align-items: center;
  letter-spacing: 2px;
  height: 100%;
  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 4px;
    transition: fill 0.3s;
    fill: var(--text2);
  }

  @include mq($from: xl) {
    font-size: var(--fs3);
    height: 32px;
  }

  @include mq($from: lg, $until: xl) {
    font-size: var(--fs2);
    height: 32px;
  }

  @include mq($from: md, $until: lg) {
    font-size: var(--fs2);
    height: 28px;
  }

  @include mq($until: md) {
    font-size: var(--fs1);
    height: 28px;
  }

  @include mq($until: sm) {
    &__icon {
      display: none;
    }
  }
}
.channel-item-right:hover {
  color: var(--brand_blue);
  .channel-item-right__icon {
    fill: var(--brand_blue);
  }
}
</style>
