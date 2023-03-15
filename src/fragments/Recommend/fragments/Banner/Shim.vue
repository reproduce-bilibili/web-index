<script lang="ts" setup>
import Card from '../Cards/Card/index.vue';
import Skeleton from '../Cards/Card/Skeleton.vue';
</script>

<template>
  <div class="b-banner__shim">
    <Card v-for="_ in 2">
      <Skeleton />
    </Card>
    <div v-for="_ in 2" class="b-banner__shim__cover"></div>
  </div>
</template>

<style lang="scss">
.b-banner__shim {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  visibility: hidden;
  &__cover {
    padding-top: 56.25%;
  }
}
</style>
