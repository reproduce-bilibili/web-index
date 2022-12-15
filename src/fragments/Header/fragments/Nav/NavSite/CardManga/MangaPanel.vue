<script lang="tsx">
import { makePanelProps } from '@/composables/panel';
import { genericComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
import ButtonPanelDefault from '@/fragments/Header/components/ButtonPanel/ButtonPanelDefault.vue';

export default genericComponent()({
  props: {
    ...makePanelProps(),
  },
  setup(props) {
    useRender(() => <ButtonPanelDefault class="manga-panel" {...props}>panel</ButtonPanelDefault>);
  },
});
</script>

<style lang="scss" scoped>
.manga-panel {
  -webkit-line-clamp: 1;
}
</style>
