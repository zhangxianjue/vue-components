import PageHeader from "./src/PageHeader/index";

// 全局导入
const components = [PageHeader];
export default {
  install(app) {
    for (const c in components) {
      app.use(components[c]);
    }
  },
};

// 按需加载
export { PageHeader };
