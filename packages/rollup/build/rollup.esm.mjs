import baseConfig, { name, file } from "./rollup.base.mjs";

export default {
  ...baseConfig,
  // 配置选项...
  output: {
    name,
    file: file("esm"),
    format: "es",
    exports: "named",
  },
};
