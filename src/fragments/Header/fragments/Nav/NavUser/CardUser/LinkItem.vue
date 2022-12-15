<script lang="ts" setup>
import NavListItem from '@/components/NavList/NavListItem.vue';
</script>

<template>
  <NavListItem class="link-item" size="md">
    <div class="link-item__title">
      <div class="link-item__title__icon">
        <slot name="icon" />
      </div>
      <slot />
    </div>
    <slot name="append" />
  </NavListItem>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.link-item {
  line-height: 1.25;
  @include flex-center();
  justify-content: space-between;
  padding: 0 14px;
  height: 38px;
  color: var(--text2);
  border-radius: var(--radius2);
  &__title {
    @include flex-center();
    &__icon {
      width: 18px;
      height: 18px;
      margin-right: 16px;
    }
  }
}
</style>
