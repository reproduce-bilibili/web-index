<script lang="ts" setup>
import { useProvideUser, mockUser } from '@/composables/userInfo';
import { ref } from 'vue';
import NavSite from './NavSite/index.vue';
import NavUser from './NavUser/index.vue';
import Search from './Search/index.vue';

useProvideUser(ref(mockUser));
</script>

<template>
  <div class="nav">
    <NavSite class="nav__left" />
    <Search class="nav__search" />
    <NavUser class="nav__right" />
  </div>
</template>

<style lang="scss">
@use '@/style/mixins.scss' as *;
@use '@/style/break-point' as * with($key: nav);

.nav {
  display: flex;
  align-items: center;
  padding: 0 24px;
  justify-content: space-between;
  color: #ffffff;
  & > * {
    z-index: 20;
  }
  &__right, &__left {
    align-self: stretch;
  }
  &__search {
    z-index: 10;
    flex-grow: 1;
    margin-left: 30px;
    margin-right: 12px;
    max-width: 500px;
  }
}

@include mq($until: lg) {
  .nav {
    &__search {
      margin: 0;
    }
  }
}

@keyframes topToBottom {
  0% {
    top: calc(-1 * var(--m4));
  }
  100% {
    top: 0;
  }
}
@include create-float-vue-theme(header-card-bottom, topToBottom);

@keyframes leftToRight {
  0% {
    left: calc(-1 * var(--m4));
  }
  100% {
    left: 0;
  }
}
@include create-float-vue-theme(header-card-right, leftToRight);
</style>
