import DefaultTheme from "vitepress/theme";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import elementPlus from "element-plus";
import "element-plus/dist/index.css";

// 全局引入 zhangxianjue-vue-components
import zhangxianjueVueComponents from "zhangxianjue-vue-components";
import "zhangxianjue-vue-components/dist/bundle.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(elementPlus);
    app.use(zhangxianjueVueComponents);

    // 图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
