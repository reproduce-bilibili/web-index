<script lang="ts" setup>
import { useProvideUser, mockUser } from '@/composables/userInfo';
import { ref } from 'vue';
import NavSite from './NavSite/index.vue';
import NavUser from './NavUser/index.vue';
useProvideUser(ref(mockUser));
</script>

<template>
  <div class="nav">
    <NavSite class="nav__left" />
    <NavUser class="nav__right" />
  </div>
</template>

<style lang="scss">
@use '@/style/mixins.scss' as *;

.nav {
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
  & > * {
    z-index: 11;
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
