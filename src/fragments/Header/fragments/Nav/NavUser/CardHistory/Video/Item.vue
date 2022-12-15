<script lang="ts" setup>
import { makeImgProps } from '@/composables/img';
import { PropType } from 'vue';
import { makeInfoProps } from '../History/components/Info.vue';
import Video from '../History/Video.vue';
import Tag from '../History/components/Tag.vue';
import Progress from '@/components/Progress.vue';
import dayjs from 'dayjs';

const getDuration = (time: string) => {
  const cur = dayjs(time, 'mm:ss');
  const diff = cur.diff(cur.startOf('hour'));
  return dayjs.duration(diff, 'millisecond');
};

defineProps({
  ...makeImgProps(),
  ...makeInfoProps(),
  timeRange: {
    type: Array as unknown as PropType<[cur: string, prev: string]>,
    default: () => ['00:00', '00:00'],
  },
});
</script>

<template>
  <Video
    class="history-video__item"
    :key="title"
    :title="title"
    :src="src"
    :device-type="deviceType"
    :date="date"
    :name="name">
    <template #img-cover>
      <Tag class="time"
        ><span class="text">{{ timeRange[0] }}/{{ timeRange[1] }}</span></Tag
      >
      <Progress
        class="progress"
        :percent="
          (getDuration(timeRange[0]).asMilliseconds() /
            getDuration(timeRange[1]).asMilliseconds()) *
          100
        "
        bg-color="rgba(0,0,0,.7)"
        progress-color="#fb7199" />
    </template>
  </Video>
</template>

<style lang="scss" scoped>
.history-video__item {
  .time {
    position: absolute;
    right: 4px;
    bottom: 4px;
    .text {
      display: inline-block;
      transform: scale(0.85);
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
