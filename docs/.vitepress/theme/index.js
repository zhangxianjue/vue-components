import DefaultTheme from "vitepress/theme";

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
  },
};
