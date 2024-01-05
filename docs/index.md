# zhangxianjue-vue-components

这是一个 Vue3 的组件库。

本项目依赖于`npm i vue element-plus @element-plus/icons-vue`。

使用之前，请确保已安装。

## 安装 & 使用

- 安装 `npm i zhangxianjue-vue-components`
- 使用示例：

```js
// main.js
import { createApp } from "vue";
import App from "./app.vue";
import elementPlus from "element-plus";
import "element-plus/dist/index.css";

// 全局引入 zhangxianjue-vue-components
import zhangxianjueVueComponents from "zhangxianjue-vue-components";
import "zhangxianjue-vue-components/dist/bundle.css";

const app = createApp(App);
app.use(elementPlus);
app.use(zhangxianjueVueComponents); // 注册 zhangxianjue-vue-components
app.mount("#app");
```

```vue
<!-- app.vue -->
<template>
  <PageHeader content="这是一个 Vue3 的组件库" />
</template>
```

<!--  -->
