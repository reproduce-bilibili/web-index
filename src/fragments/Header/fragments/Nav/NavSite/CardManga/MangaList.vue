<script lang="tsx">
import type { PanelProps } from '@/composables/panel';
import type { LinkProps } from '@/composables/link';
import { genericComponent } from '@/utils/defineComponent';
import { PropType, ref } from 'vue';
import { useRender } from '@/utils/useRender';
import NavList from '@/components/NavList/index.vue';
import NavListItem from '@/components/NavList/NavListItem.vue';
import { ArrayElement } from '@/utils/helpers';

export default genericComponent()({
  props: {
    list: Array as PropType<(LinkProps & PanelProps)[]>,
  },
  setup({ list }) {
    const curManga = ref<null | ArrayElement<typeof list>>();
    useRender(() => (
      <div class="manga-list">
        <div class="manga-list__title">人气漫画</div>
        <NavList>
          {list?.map((v, i) => (
            <NavListItem
              class="manga-list__item"
              {...v}
              onMouseenter={() => (curManga.value = v)}
              onMouseleave={() => (curManga.value = null)}>
              <span class="manga-list__item__index">{i + 1}</span>
              {v.title}
            </NavListItem>
          ))}
        </NavList>
        <div
          class="manga-list__cover"
          vShow={!!curManga.value}
          vImg={curManga.value?.src}></div>
      </div>
    ));
  },
});
</script>

<style lang="scss" scoped>
.manga-list {
  position: relative;
  &__title {
    height: 28px;
    font-size: var(--fs5);
    line-height: 28px;
    margin-left: 8px;
    margin-bottom: 10px;
  }
  &__item {
    width: 145px;
    &__index {
      vertical-align: baseline;
      font-style: italic;
      font-family: Avenir;
      font-weight: 900;
      font-size: var(--fs2);
      margin-right: 5px;
      color: var(--text4);
    }
    &:nth-child(1) &__index {
      color: #ff473d;
    }
    &:nth-child(2) &__index {
      color: #ff6a29;
    }
    &:nth-child(3) &__index {
      color: #ff9214;
    }
  }
  &__cover {
    width: 160px;
    height: 213px;
    position: absolute;
    top: 6px;
    right: -150px;
    border-radius: var(--radius2);
    overflow: hidden;
  }
}
</style>
