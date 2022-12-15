<script lang="ts" setup>
import LinkItem from './LinkItem.vue';
import DropDownMenu from '../../components/DropDownMenu.vue';
import IconUser from '@/components/Icon/User.vue';
import IconUploadManager from '@/components/Icon/UploadManager.vue';
import IconStar from '@/components/Icon/Star.vue';
import IconArrow from '@/components/Icon/Arrow.vue';
import LinkListRecommend from './LinkListRecommend.vue';
</script>

<template>
  <div class="link-list">
    <LinkItem href="https://account.bilibili.com/account/home">
      <span>个人中心</span>
      <template #icon><IconUser /></template>
      <template #append><IconArrow class="link-icon--right" /></template>
    </LinkItem>
    <LinkItem href="https://member.bilibili.com/v2#/upload-manager/article">
      <span>投稿管理</span>
      <template #icon><IconUploadManager /></template>
      <template #append><IconArrow class="link-icon--right" /></template>
    </LinkItem>
    <!-- TODO: 嵌套会自动收起 https://github.com/Akryum/floating-vue/issues/916 -->
    <DropDownMenu container=".card-user">
      <LinkItem>
        <span>推荐服务</span>
        <template #icon><IconStar /></template>
        <template #append><IconArrow class="link-icon--right" /></template>
      </LinkItem>
      <template #popper>
        <LinkListRecommend class="link-list--recommend" />
      </template>
    </DropDownMenu>
  </div>
</template>

<style lang="scss">
.link-list {
  > * {
    margin-bottom: 2px;
  }
  .link-icon--right {
    transform: rotate(-90deg);
  }
  &--recommend {
    padding: 12px;
  }
}
</style>
