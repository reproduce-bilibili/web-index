<script lang="ts" setup>
import { makeImgProps } from '@/composables/img';
import { computed, PropType } from 'vue';
import { makeInfoProps } from './components/Info.vue';
// import Video from './History/Video.vue';
import Img from './components/Img.vue';
import Info from './components/Info.vue';
import Tag from './components/Tag.vue';
import Progress from '@/components/Progress.vue';
import Container from './components/Container.vue';
import dayjs from 'dayjs';
import { makeTabTypeProps } from '@/composables/navTabType';

const props = defineProps({
  ...makeTabTypeProps(),
  ...makeImgProps(),
  ...makeInfoProps(),
  isActive: Boolean,
  timeRange: {
    type: Array as unknown as PropType<[cur: string, prev: string]>,
    default: () => ['00:00', '00:00'],
  },
});

const putImgLeft = computed(() => props.type !== 'read');

const liveTagTitle = computed(() => (props.isActive ? '直播中' : '未开播'));
const liveStatusCls = computed(() => [
  'live-status',
  { 'live-status--active': props.isActive },
]);

const getDuration = (time: string) => {
  const cur = dayjs(time, 'mm:ss');
  const diff = cur.diff(cur.startOf('hour'));
  return dayjs.duration(diff, 'millisecond');
};
</script>

<template>
  <Container class="history-video__item video-container">
    <Img v-if="putImgLeft" class="img--left" :src="src">
      <Tag v-if="type === 'video'" class="time"
        ><span class="text">{{ timeRange[0] }}/{{ timeRange[1] }}</span></Tag
      >
      <Progress
        v-if="type === 'video'"
        class="progress"
        :percent="
          (getDuration(timeRange[0]).asMilliseconds() /
            getDuration(timeRange[1]).asMilliseconds()) *
          100
        "
        bg-color="rgba(0,0,0,.7)"
        progress-color="#fb7199" />
      <Tag v-if="type === 'live'" :class="liveStatusCls"
        ><span class="text">{{ liveTagTitle }}</span></Tag
      >
    </Img>
    <Info
      class="info"
      :title="title"
      :device-type="deviceType"
      :date="date"
      :name="name" />
    <Img v-if="!putImgLeft" class="img--right" :src="src" />
  </Container>
</template>

<style lang="scss" scoped>
.history-video__item {
  display: flex;
  .img--left,
  .img--right {
    height: 72px;
    flex-shrink: 0;
  }
  .img--left {
    width: 128px;
    margin-right: 10px;
  }
  .img--right {
    width: 96px;
    margin-left: 10px;
  }
  .info {
    flex-grow: 1;
  }
  .time {
    position: absolute;
    right: 4px;
    bottom: 4px;
    .text {
      display: inline-block;
      transform: scale(0.85);
    }
  }
  .live-status {
    position: absolute;
    right: 4px;
    top: 4px;
    padding: 0 6px;
    line-height: 18px;
    .text {
      line-height: 17px;
    }
    &--active {
      background-color: #fb7199;
    }
  }
  .progress {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 3px;
  }
}
</style>
