import Button from "./src/button/index";
import Alert from "./src/alert/index";

// 全局导入
const components = [Button, Alert];
export default {
  install(app) {
    for (const c in components) {
      app.use(components[c]);
    }
  },
};

// 按需加载
export { Button, Alert };
