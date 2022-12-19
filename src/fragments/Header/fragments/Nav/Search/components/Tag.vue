<script lang="tsx">
import { genericComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
import Graph from '@/components/Graph/index.vue';
import IconClose from '@/components/Icon/Close.vue';
import { useTextOverflow } from '@/composables/textOverflow';
import { computed } from 'vue';

export default genericComponent()({
  props: {
    deleteAble: Boolean,
    text: String,
  },
  emits: ['delete'],
  setup(props, { slots, emit }) {
    const { target, isOverflow } = useTextOverflow();
    const title = computed(() =>
      slots.default ? undefined : isOverflow.value ? props.text : undefined,
    );
    useRender(() => (
      <Graph class="search-history-tag" title={title.value}>
        <div class="search-history-tag__content" ref={target}>
          {slots.default ? slots.default() : props.text || ''}
        </div>
        {props.deleteAble && (
          <IconClose
            class="search-history-tag__delete-icon"
            onClick={(e: Event) => {
              e.stopPropagation();
              emit('delete');
            }}
          />
        )}
      </Graph>
    ));
  },
});
</script>

<style lang="scss">
@use '@/style/mixins.scss' as *;
.search-history-tag {
  padding: 8px 10px;
  background-color: var(--graph_bg_thin);
  position: relative;
  border-radius: 4px;
  &__content {
    @include line-clamp(1);
    width: 100%;
    font-size: var(--fs0);
    color: var(--text1);
  }
  &__delete-icon {
    display: none;
    color: #ccc;
    position: absolute;
    width: 14px;
    height: 14px;
    top: 0;
    right: 0;
    transform: translate(27.5%, -27.5%);
  }
}
.search-history-tag:hover {
  .search-history-tag {
    &__content {
      color: var(--brand_blue);
    }
    &__delete-icon {
      display: block;
    }
  }
}
</style>
