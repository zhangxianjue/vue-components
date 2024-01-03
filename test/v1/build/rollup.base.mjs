import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import typescript from "rollup-plugin-typescript2"; // typescript 转义
import { nodeResolve } from "@rollup/plugin-node-resolve";

import pkg from "../package.json" assert { type: "json" };
export const { name } = pkg;
export const file = (t) => `dist/${name}.${t}.js`;

// const tsconfigOverride = { compilerOptions: { declaration: true }, exclude: ["node_modules", "src/App.vue"] };

export default {
  input: "src/main.ts",
  plugins: [nodeResolve(), typescript(), vue(), css({ output: "bundle.css" })],
  external: ["vue"],
};
