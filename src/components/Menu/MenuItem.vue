<script lang="tsx">
import ButtonNavBase from '../Button/ButtonNavBase.vue';
import { makeSizeProps, useSize } from '@/composables/size';
import { genericComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
export default genericComponent()({
  props: {
    ...makeSizeProps(),
  },
  setup(props, { slots, attrs }) {
    const { cls } = useSize(props, attrs, { cls: ['b-menu-item'] });
    useRender(() => (
      <ButtonNavBase class={cls}>{slots.default?.()}</ButtonNavBase>
    ));
  },
});
</script>

<style lang="scss">
.b-menu-item {
  color: var(--text2);
  transition: background-color .3s;
  &:hover {
    background-color: var(--graph_bg_thick);
  }
  &--md {
    font-size: var(--fs2);
    height: 38px;
  }
}
</style>
