<script lang="tsx">
import ButtonNavBase from '@/components/Button/ButtonNavBase.vue';
import { makeSizeProps, useSize } from '@/composables/size';
import { genericComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
export default genericComponent()({
  props: {
    ...makeSizeProps(),
  },
  setup(props, { slots, attrs }) {
    const { cls } = useSize(props, attrs, { cls: ['b-nav-list-item'] });
    useRender(() => (
      <ButtonNavBase class={cls} >{slots.default?.()}</ButtonNavBase>
    ));
  },
});
</script>

<style lang="scss" scoped>
.b-nav-list-item {
  display: block;
  border-radius: var(--radius0);
  color: var(--text2);
  padding: 0 var(--m0);
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
  transition: background-color 0.3s;
  height: 31px;
  line-height: 31px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: var(--graph_bg_thick);
  }
  &--sm {
    font-size: var(--fs1);
  }
  &--md {
    font-size: var(--fs2);
  }
}
</style>
