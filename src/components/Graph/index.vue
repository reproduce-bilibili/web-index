<script lang="tsx">
import { makeLinkProps, useLink } from '@/composables/link';
import { genericComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
import { computed } from 'vue';

export default genericComponent()({
  props: {
    tag: String,
    ...makeLinkProps(),
  },
  setup(props, { slots, attrs }) {
    const { isLink } = useLink(props, attrs);
    const Tag = computed(() =>
      props.tag ? props.tag : isLink.value ? 'a' : 'div',
    );
    useRender(() => (
      <Tag.value
        href={props.href}
        target={isLink.value ? props.target : undefined}
        class="graph">
        {slots.default?.()}
      </Tag.value>
    ));
  },
});
</script>

<style lang="scss" scoped>
a.graph {
  text-decoration: none;
}
.graph {
  // border-radius: var(--radius2);
  background-color: transparent;
}
</style>
