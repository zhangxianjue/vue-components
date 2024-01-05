import { createApp } from "vue";
import App from "./app.vue";
import elementPlus from "element-plus";
import zhangxianjueVueComponents from "zhangxianjue-vue-components";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(elementPlus);
app.use(zhangxianjueVueComponents);
app.mount("#app");
