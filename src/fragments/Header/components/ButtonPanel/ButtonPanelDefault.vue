<script lang="tsx">
import ButtonNavBase from '@/components/Button/ButtonNavBase.vue';
import { makePanelProps } from '@/composables/panel';
import { makeSizeProps } from '@/composables/size';
import { genericComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
import ButtonPanelTitle from './ButtonPanelTitle.vue';
export default genericComponent()({
  props: {
    ...makePanelProps(),
    ...makeSizeProps(),
  },
  setup(props, { slots }) {
    useRender(() => (
      <ButtonNavBase class="button-panel" title={props.title}>
        {slots.img ? (
          slots.img()
        ) : (
          <div class="button-panel__img" vImg={props.src}></div>
        )}
        {slots.title ? (
          slots.title()
        ) : (
          <ButtonPanelTitle title={props.title} size={props.size} />
        )}
      </ButtonNavBase>
    ));
  },
});
</script>

<style lang="scss" scoped>
.button-panel {
  display: flex;
  flex-direction: column;
  text-align: start;
  transition-property: color;
  transition-duration: 0.3s;
  color: inherit;
  &:hover {
    color: var(--link_blue);
  }
  &__img {
    border-radius: var(--radius2);
    overflow: hidden;
  }
}
</style>
