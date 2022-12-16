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
    <li class="nav--user__item icon">
      <EntryMsg />
    </li>
    <li class="nav--user__item icon">
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

<style lang="scss" scoped>
.nav--user {
  display: flex;
  align-items: center;
  &__item {
    list-style: none;
    height: 100%;
    & > * {
      height: 100%;
      display: flex;
      align-items: center;
    }
    &.user {
      margin-right: 10px;
    }
    &__upload {
      margin-left: var(--m4);
    }
  }
}
</style>
