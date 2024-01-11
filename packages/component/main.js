import PageHeader from "./src/PageHeader/index";
import ComponentExample from "./src/ComponentExample/index";
import BilibiliTutorial from "./src/BilibiliTutorial/index";
import Roadmap from "./src/Roadmap/index";

// 按需加载
export const components = { PageHeader, ComponentExample, BilibiliTutorial, Roadmap };

// 全局导入
export default {
  install(app) {
    for (const c in components) {
      app.use(components[c]);
    }
  },
};
