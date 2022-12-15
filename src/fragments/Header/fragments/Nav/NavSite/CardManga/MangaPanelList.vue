<script lang="tsx">
import { PropType } from 'vue';
import type { LinkProps } from '@/composables/link';
import type { PanelProps } from '@/composables/panel';
import { useRender } from '@/utils/useRender';
import MangaPanel from './MangaPanel.vue';
import { defineComponent } from '@/utils/defineComponent';

export default defineComponent({
  props: {
    panelList: Array as PropType<(LinkProps & PanelProps)[]>,
  },
  setup({ panelList }) {
    useRender(() => (
      <div class="card-manga-panel">
        {panelList?.map((v) => (
          <MangaPanel {...v} />
        ))}
      </div>
    ));
  },
});
</script>

<style lang="scss">
.card-manga-panel {
  display: grid;
  grid-template-columns: repeat(2, 136px);
  grid-template-rows: repeat(2, 100px);
  gap: 16px;
}
</style>
