<template>
  <div class="b-split-line">
    <div class="b-split-line__content"><slot /></div>
  </div>
</template>

<style lang="scss">
@use '@/style/mixins.scss' as *;
.b-split-line {
  @include flex-center();
  &__content {
    color: var(--text3);
    font-size: var(--fs0);
  }
  &::before,
  &::after {
    content: '';
    border-top: 1px solid var(--line_regular);
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
  }
}
</style>
