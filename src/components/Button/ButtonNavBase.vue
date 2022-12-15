<script lang="tsx">
import Graph from '@/components/Graph/index.vue';
import { makeLinkProps } from '@/composables/link';
import { genericComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
export default genericComponent()({
  props: {
    ...makeLinkProps(),
  },
  setup(props, { slots }) {
    useRender(() => (
      <Graph class="button-nav" {...props}>
        {slots.default?.()}
      </Graph>
    ));
  },
});
</script>

<style lang="scss" scoped>
.button-nav {
  display: inline-block;
  cursor: pointer;
}
</style>
