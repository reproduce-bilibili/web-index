<script lang="tsx">
import { genericComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';

export default genericComponent()({
  props: {
    percent: Number,
    bgColor: {
      type: String,
      default: 'var(--line_regular)',
    },
    progressColor: {
      type: String,
      default: 'var(--brand_blue)',
    },
  },
  setup(props) {
    useRender(() => (
      <div class="b-progress__container">
        <div
          class="b-progress__inner"
          style={{ width: `${props.percent}%` }}></div>
      </div>
    ));
  },
});
</script>

<style lang="scss">
.b-progress {
  &__container {
    height: 2px;
    background-color: v-bind(bgColor);
  }
  &__inner {
    height: inherit;
    background-color: v-bind(progressColor);
  }
}
</style>
