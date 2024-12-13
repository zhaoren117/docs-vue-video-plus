# 播放器配置

全部配置项

```javascript
<script setup lang="ts">
import { reactive} from 'vue'
const options = reactive({
  width: '960px',   //播放器的宽度
  height: '640px',  //播放器的高度
  muted: false, //静音
  webFullScreen: false,
  autoPlay: false, //自动播放
  currentTime: 0,
  loop: false, //循环播放
  mirror: false, //镜像画面
  lightOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制器
  title: '', //视频名称
  type: 'video/mp4',
  //src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', //视频源
  src: 'src/package/assets/video/an.mp4', //视频源
  //src: 'https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8', //视频源
  //poster: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg", //封面
  controlBtns: [
    'audioTrack',
    'quality',
    'speedRate',
    'volume',
    'setting',
    'pip',
    'pageFullScreen',
    'fullScreen'
  ]
})

</script>

```

## 配置说明

| 名 称  | <div style="width:100px;">说 明</div> | <div style="width:100px;">类 型</div> | 可选值 | 默认值 |
| :----: | :-----------------------------------: | :-----------------------------------: | :----: | :----: |
| width  |              播放器宽度               |                string                 |   -    | 640px  |
| height |              播放器高度               |                  89                   |   2    |   2    |
|  李雷  |                   3                   |                  59                   |   3    |   3    |
| 韩梅梅 |                   4                   |                  93                   |   3    |   3    |
