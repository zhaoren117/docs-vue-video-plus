# 开始使用

#### 全局使用

```javascript
import { createApp } from "vue";
import App from "./App.vue";
let app = createApp(App);

import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css
app.use(vue3videoPlay);

app.mount("#app");
```

#### 组件内使用

```javascript
// 引入样式
import "vue3-video-play/dist/style.css";
import { videoPlay } from "vue-video-play";
export default {
  components: {
    videoPlay,
  },
};
```
