# 事件 Events

<b>事件示例，通过@符号加事件名的方式使用
</b>
::: tip
vue-video-plus 支持 video 原生所有事件 video 默认事件
:::

```vue
<template>
  <div>
    <vueVideoPlus
      width="800px"
      title="钢铁侠"
      :src="options.src"
      :poster="options.poster"
      @play="onPlay"
      @pause="onPause"
      @timeupdate="onTimeupdate"
      @canplay="onCanplay"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const options = reactive({
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
  poster: "", //封面
});

// 视频开始播放时触发
const onPlay = (ev) => {
  console.log("播放");
};

// 视频暂停时触发
const onPause = (ev) => {
  console.log(ev, "暂停");
};

//  更新播放时间时触发
const onTimeupdate = (ev) => {
  console.log(ev, "时间更新");
};
//视频可以播放时触发
const onCanplay = (ev) => {
  console.log(ev, "可以播放");
};
</script>

<style scoped></style>
```

<b>全部事件</b>

| 事件名称       | 说明               | 回调  |
| -------------- | ------------------ | ----- |
| mirrorChange   | 镜像翻转事件       | val   |
| loopChange     | 循环播放开关事件   | val   |
| lightOffChange | 关灯模式事件       | val   |
| loadstart      | 客户端开始请求数据 | event |
| progress       | 客户端正在请求数据 | event |
| error          | 请求数据时遇到错误 | event |
| stalled        | 网速失速           | event |
| play           | 开始播放时触发     | event |
| pause          | 暂停时触发         | event |
| loadedmetadata | 成功获取资源长度   | event |
| loadeddata     | 缓冲中             | event |
| waiting        | 等待数据，并非错误 | event |
| playing        | 开始回放           | event |
| canplay        | 暂停状态下可以播放 | event |
| canplaythrough | 可以持续播放       | event |
| timeupdate     | 更新播放时间       | event |
| ended          | 播放结束           | event |
| ratechange     | 播放速率改变       | event |
| durationchange | 资源长度改变       | event |
| volumechange   | 音量改变           | event |
