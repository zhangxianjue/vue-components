import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import { nodeResolve } from "@rollup/plugin-node-resolve";

import pkg from "../package.json" assert { type: "json" };
export const { name } = pkg;
export const file = (t) => `dist/${name}.${t}.js`;

export default {
  input: "main.js",
  plugins: [nodeResolve(), vue(), css({ output: "bundle.css" })],
  external: ["vue", "vue-router", "element-plus", "@element-plus/icons-vue"],
};
