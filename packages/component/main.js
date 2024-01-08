import PageHeader from "./src/PageHeader/index";
import ComponentExample from "./src/ComponentExample/index";

// 全局导入
const components = [PageHeader, ComponentExample];
export default {
  install(app) {
    for (const c in components) {
      app.use(components[c]);
    }
  },
};

// 按需加载
export { PageHeader, ComponentExample };
