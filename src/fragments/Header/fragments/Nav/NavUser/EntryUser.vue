<script lang="ts" setup>
import ButtonNavBase from '@/components/Button/ButtonNavBase.vue';
import DropDown from '@/fragments/Header/fragments/Nav/components/DropDown.vue';
import { Avatar } from '@/components/Avatar/index';
import CardUser from './CardUser/index.vue';
import { computed, ref, watch } from 'vue';
import { gsap } from 'gsap';
import { userInjectUser } from '@/composables/userInfo';
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
        :show-tag="true"
        :user-info="userInfo"
        class="avatar avatar--large"
        ref="avatarLargeRef"
        :src="
          userInfo ? `${userInfo?.avatar}@240w_240h_1c_1s.webp` : undefined
        " />
      <Avatar
        class="avatar"
        ref="avatarSmallRef"
        :src="
          userInfo ? `${userInfo?.avatar}@120w_120h_1c_1s.webp` : undefined
        " />
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
