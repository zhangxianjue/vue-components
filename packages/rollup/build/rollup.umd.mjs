import baseConfig, { file } from "./rollup.base.mjs";

export default {
  ...baseConfig,
  // 配置选项...
  output: {
    name: "zhangxianjueVueComponents",
    file: file("umd"),
    format: "umd",
    globals: {
      vue: "Vue",
    },
    exports: "named",
  },
};
