<script lang="ts" setup>
import { useProvideUser, mockUser } from '@/composables/userInfo';
import { ref } from 'vue';
import { useNavState } from '../../composables/nav';
import NavSite from './NavSite/index.vue';
import NavUser from './NavUser/index.vue';
import Search from './Search/index.vue';

useProvideUser(ref(mockUser));
const navState = useNavState();
</script>

<template>
  <div :class="['nav', { 'nav--fixed': navState?.fixed }]">
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
  &__right,
  &__left {
    align-self: stretch;
  }
  &__right {
    margin-left: 12px;
  }
  &__left {
    margin-right: 10px;
  }
  &__search {
    z-index: 10;
    flex-grow: 1;
    flex-basis: 0;
    max-width: 500px;
  }
  min-width: 1080px;
}

.nav--fixed {
  background-color: var(--bg1_float);
  color: var(--text1);
  box-shadow: inset 0 -1px #f1f2f3;
  max-width: var(--layout_content_max_width);
  .entry--icon-top__text {
    color: var(--text2);
  }
}

@include mq($until: lg) {
  .nav {
    &__search {
      margin: 0;
    }
  }
}
</style>
