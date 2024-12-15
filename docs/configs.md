# 播放器配置

### 配置示例

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

### 配置说明

::: tip
vue3-video-play 支持 video 原生所有 Attributes [video 原生属性](https://segmentfault.com/a/1190000008053507) 使用方式和 props 属性使用一致
:::

| <div style="width: 70px">名称</div> | <div style="width: 100px;">说明</div> | 类型    | 可选值                                                                                             | 默认值                                                                                             |
| :---------------------------------- | ------------------------------------- | ------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| width                               | 播放器宽度                            | string  | -                                                                                                  | 800px                                                                                              |
| height                              | 播放器高度                            | string  | -                                                                                                  | 450px                                                                                              |
| color                               | 播放器主色调                          | string  | -                                                                                                  | #409eff                                                                                            |
| src                                 | 视频资源                              | string  | -                                                                                                  | -                                                                                                  |
| title                               | 视频名称                              | string  | -                                                                                                  | -                                                                                                  |
| type                                | 视频类型                              | string  | -                                                                                                  | video/mp4                                                                                          |
| poster                              | 视频封面                              | string  | -                                                                                                  | 视频第一帧                                                                                         |
| webFullScreen                       | 网页全屏                              | boolean | -                                                                                                  | false                                                                                              |
| speed                               | 是否支持快进快退                      | boolean | -                                                                                                  | true                                                                                               |
| currentTime                         | 跳转到固定播放时间(s)                 | number  | -                                                                                                  | 0                                                                                                  |
| playsinline                         | ios 点击屏幕是否全屏                  | boolean | -                                                                                                  | false                                                                                              |
| muted                               | 静音                                  | boolean | -                                                                                                  | false                                                                                              |
| speedRate                           | 倍速配置                              | array   | -                                                                                                  | ["2.0", "1.0", "1.5", "1.25", "0.75", "0.5"]                                                       |
| autoPlay                            | 自动播放                              | boolean | -                                                                                                  | false,为 true 时会自动静音                                                                         |
| loop                                | 循环播放                              | boolean | -                                                                                                  | false                                                                                              |
| mirror                              | 镜像画面                              | boolean | -                                                                                                  | false                                                                                              |
| ligthOff                            | 关灯模式                              | boolean | -                                                                                                  | false                                                                                              |
| volume                              | 默认音量                              | number  | 0-1                                                                                                | 0.3                                                                                                |
| control                             | 是否显示控制器                        | boolean | -                                                                                                  | true                                                                                               |
| controlBtns                         | 控制器显示的按钮                      | array   | ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] | ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] |
| preload                             | 预加载                                | string  | meta/auto/none                                                                                     | auto                                                                                               |

#### `props`属性 `controlBtns` 按钮说明

| 名称           | 说明             |
| -------------- | ---------------- |
| audioTrack     | 音轨切换按钮     |
| quality        | 视频质量切换按钮 |
| speedRate      | 速率切换按钮     |
| volume         | 音量             |
| setting        | 设置             |
| pip            | 画中画按钮       |
| pageFullScreen | 网页全屏按钮     |
| fullScreen     | 全屏按钮         |
