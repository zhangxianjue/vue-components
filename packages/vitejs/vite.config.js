import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    outDir: "dist",
    minify: false,
    rollupOptions: {
      external: ["vue"], // 忽略打包的库名称
      input: ["index.js"],
      output: [
        {
          format: "es", // 打包格式
          dir: "dist", // 打包后的文件目录
          entryFileNames: "[name].js", // 打包后的文件目录
        },
      ],
    },
    lib: {
      entry: "./index.js",
    },
  },
  plugins: [vue()],
});
