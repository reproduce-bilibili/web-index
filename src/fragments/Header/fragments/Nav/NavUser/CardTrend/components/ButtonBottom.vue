<script lang="ts" setup>
import ButtonViewAll from '../../../components/ButtonViewAll.vue';
</script>

<template>
  <ButtonViewAll class="button-bottom"
    ><slot> 查看全部动态<IconArrow class="icon" /> </slot
  ></ButtonViewAll>
</template>

<style lang="scss" scoped>
.button-bottom {
  margin: 16px 20px;
  .icon {
    transform: rotate(-90deg);
  }
}
</style>
