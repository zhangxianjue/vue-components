import { createApp } from "vue";
import App from "./app.vue";
import zhangxianjueVueComponents from "zhangxianjue-vue-components";

const app = createApp(App);
app.use(zhangxianjueVueComponents);
app.mount("#app");
