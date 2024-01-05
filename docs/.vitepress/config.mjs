import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vue3 组件库",
  description: "这是一个 Vue3 组件库",
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],
    sidebar: {
      "/": {
        text: "简介",
        link: "/",
        items: [{ text: "组件", items: [{ text: "PageHeader 头部导航", link: "/component/page-header.md" }] }],
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
