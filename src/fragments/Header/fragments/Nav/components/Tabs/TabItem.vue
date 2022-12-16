<script lang="tsx">
import { makeTabItemProps } from '@/composables/tabs';
import { genericComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
import Graph from '@/components/Graph/index.vue';
import { computed } from 'vue';

export default genericComponent()({
  props: {
    ...makeTabItemProps(),
  },
  setup(props, { slots }) {
    const title = computed(() =>
      props.isActive ? props.activeTitle || props.title : props.title,
    );
    const baseCls = 'nav-tab-item';
    const cls = computed(() => [
      baseCls,
      {
        [`${baseCls}--active`]: props.isActive,
      },
    ]);
    useRender(() => (
      <Graph class={cls.value}>{slots.default?.() || title.value}</Graph>
    ));
  },
});
</script>

<style lang="scss" scoped>
.nav-tab-item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  padding: 15px 0;
  text-align: center;
  font-size: var(--fs2);
  cursor: pointer;
  border-bottom: 3px solid transparent;
  &--active {
    color: var(--brand_blue);
    border-bottom: 3px solid var(--brand_blue);
  }
}
</style>
