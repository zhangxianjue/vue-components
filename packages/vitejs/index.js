import * as components from "./src/index";

export * from "./src/index";
export default {
  install(app) {
    for (const c in components) {
      app.use(components[c]);
    }
  },
};
