# 开始使用

#### 全局使用

```javascript
import { createApp } from "vue";
import App from "./App.vue";
let app = createApp(App);

import vueVideoPlus from "vue-video-plus"; // 引入组件
import "vue-video-plus/dist/style.css"; // 引入css
app.use(vueVideoPlus);

app.mount("#app");
```

#### 组件内使用

```javascript
// 引入样式
import "vue-video-plus/dist/style.css";
import { videoPlay } from "vue-video-plus";
export default {
  components: {
    videoPlay,
  },
};
```
