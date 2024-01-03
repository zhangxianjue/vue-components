import { createApp } from "vue";
import App from "./app.vue";
import { Button } from "zhangxianjue-vue-components";
console.log(Button);
const app = createApp(App);
app.use(Button);

app.mount("#app");
