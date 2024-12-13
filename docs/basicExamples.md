# 基本使用案例

下面是一个基本的使用案例,更多配置和属性、事件查看下面

```javascript
<template>
  <div>
    <vue3VideoPlay v-bind="options" poster='https://go.dreamwq.com/videos/ironMan.jpg'/>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const options = reactive({
  width: '800px', //播放器高度
  height: '450px', //播放器高度
  color: "#409eff", //主题色
  title: '', //视频名称
  src: "https://go.dreamwq.com/videos/IronMan.mp4", //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false,  //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制器
})
</script>

<style scoped>
</style>
```
