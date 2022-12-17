<template>
  <div class="no-more-tip">
    <slot><span>暂时没有新动态了哦！</span></slot>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.no-more-tip {
  @include flex-center();
  width: 100%;
  height: 100px;
  color: var(--text3);
  font-size: var(--fs2);
}
</style>
