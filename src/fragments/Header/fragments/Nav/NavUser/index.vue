<script lang="ts" setup>
import EntryVip from './EntryVip.vue';
import EntryMsg from './EntryMsg.vue';
import EntryTrend from './EntryTrend.vue';
import EntryCollection from './EntryCollection.vue';
import EntryHistory from './EntryHistory.vue';
import EntryCreationCenter from './EntryCreationCenter.vue';
import EntryUpload from './EntryUpload.vue';
import EntryUser from './EntryUser.vue';
</script>

<template>
  <ul class="nav--user">
    <li class="nav--user__item user">
      <EntryUser />
    </li>
    <li class="nav--user__item icon">
      <EntryVip />
    </li>
    <li class="nav--user__item icon has-badge">
      <EntryMsg />
    </li>
    <li class="nav--user__item icon has-badge">
      <EntryTrend />
    </li>
    <li class="nav--user__item icon">
      <EntryCollection />
    </li>
    <li class="nav--user__item icon">
      <EntryHistory />
    </li>
    <li class="nav--user__item icon">
      <EntryCreationCenter />
    </li>
    <li class="nav--user__item icon">
      <EntryUpload class="nav--user__item__upload" />
    </li>
  </ul>
</template>

<style lang="scss">
@use '@/style/break-point' as * with($key: nav);

.nav--user {
  display: flex;
  align-items: center;
  &__item {
    list-style: none;
    height: 100%;
    .nav-badge-count {
      position: absolute;
      top: 6px;
      left: 26px;
    }
    & > * {
      height: 100%;
      min-width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.user {
      margin-right: 10px;
    }
    &__upload {
      margin-left: var(--m4);
    }
    .entry--upload {
      width: 90px;
    }
  }
}
@include mq($until: lg) {
  .nav--user {
    &__item {
      & > * {
        min-width: 25px;
        margin: 0 5px;
      }
      .nav-badge-count {
        left: 12px;
      }
    }
    .user {
      margin-right: 0;
    }
    &__item.has-badge {
      margin: 0 5px;
    }
  }
}
@include mq($until: md) {
  .entry--icon-top__text,
  .entry--upload__text {
    display: none;
  }
  .nav--user {
    &__item {
      & > * {
        min-width: 25px;
        margin: 0 5px;
      }
      .nav-badge-count {
        top: 14px;
        left: 10px;
      }
      .entry--upload {
        width: 34px;
      }
    }
    &__item.has-badge {
      margin: 0 5px;
    }
  }
}
</style>
