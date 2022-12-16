<script lang="ts" setup>
import ButtonNavBase from '@/components/Button/ButtonNavBase.vue';
import DropDown from '@/fragments/Header/fragments/Nav/components/DropDown.vue';
import { Avatar } from '@/components/Avatar/index';
import CardUser from './CardUser/index.vue';
import { computed, ref, watch } from 'vue';
import { gsap } from 'gsap';
import { userInjectUser } from '../composables/userInfo';
const userInfo = userInjectUser();
const showBigAvatar = ref(false);
const avatarSmallRef = ref<Avatar>();
const avatarLargeRef = ref<Avatar>();
const tl = computed(() =>
  gsap
    .timeline()
    .to(avatarSmallRef.value?.$el, { delay: 0.1, duration: 0, opacity: 0 })
    .to(
      avatarLargeRef.value?.$el,
      {
        duration: 0.4,
        x: -(20 + (86 - 38) / 2),
        y: 64 / 2 - (86 - 38) / 2 + 8,
        ease: 'power2',
      },
      '<',
    )
    .to(
      avatarLargeRef.value?.$el,
      {
        duration: 0,
        opacity: 1,
      },
      '<',
    )
    .to(
      avatarLargeRef.value?.$el,
      {
        duration: 0.2,
        width: 86,
        height: 86,
      },
      '<',
    )
    .pause(),
);

watch(showBigAvatar, (v, ov) => {
  v && tl.value.restart();
  !v && tl.value.reverse();
});
</script>

<template>
  <DropDown
    @apply-hide="showBigAvatar = false"
    @apply-show="showBigAvatar = true"
    :skidding="-20">
    <ButtonNavBase
      class="avatar-wrapper"
      href="https://space.bilibili.com/11171730">
      <Avatar
        :show-vip-tag="!!userInfo?.isVip"
        class="avatar avatar--large"
        ref="avatarLargeRef"
        src="/i0.hdslb.com/bfs/face/8ba4007cbe202ee990b9e14fb26e159da6e8d9af.jpg@240w_240h_1c_1s.webp" />
      <Avatar
        class="avatar"
        ref="avatarSmallRef"
        src="/i0.hdslb.com/bfs/face/8ba4007cbe202ee990b9e14fb26e159da6e8d9af.jpg@120w_120h_1c_1s.webp" />
    </ButtonNavBase>
    <template #popper>
      <CardUser />
    </template>
  </DropDown>
</template>

<style lang="scss" scoped>
.avatar {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 38px;
  height: 38px;
  &--large {
    opacity: 0;
  }
}
.avatar-wrapper {
  position: relative;
  width: 50px;
  height: 50px;
}
</style>
