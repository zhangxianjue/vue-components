# vue-components

这是一个 Vue.js 的公共组件库。

> 如何构建一个 vue3 组件库？
>
> https://blog.csdn.net/weixin_44695324/article/details/130270256 参考文章

## 问题

- 什么是 Monorepo 项目架构？Monorepo 项目架构，就是在一个项目里面同时管理多个模块，且模块之间可以互相引用。但互不干扰。
- 为什么选用 pnpm?
  - pnpm 如何给指定包安装依赖？`pnpm add <package-name> --filter <package-directory>`
  - pnpm -F docs dev
- 为什么选用 TS?

## 如何搭建一个 Vue 组件库？

- 初始化项目 `pnpm init`
- 创建工作区配置文件 `pnpm-workspace.yaml`

```yaml
packages:
  - "package/**"
  - "docs"
```

- 安装通用依赖 `pnpm add vue -w & pnpm add @vitejs/plugin-vue vite -w -D`
- 创建文档项目 examples
  - 初始化项目 `pnpm init`
  - 安装依赖 `pnpm install vite @vitejs/plugin-vue -D -F examples`
  - 创建配置文件 `vite.config.js`
  - 创建入口文件 `index.html & main.js`
  - 创建组件测试文件 `app.vue`
  - 配置运行脚本 `"scripts": {"dev": "vite"}`, 并添加全局运行脚本 `"scripts": {"dev": "pnpm -F examples dev"}`
  - 测试一下
- 创建组件库项目 `components`
  - 初始化项目 `pnpm init`
  - 创建测试组件 `src/button/button.vue & src/button/index.js`
  - 创建组件导出文件 `src/index.js`
  - 创建组件库入口文件 `index.js`
- 对组件库项目进行打包
  - 创建配置文件 `vite.config.js`
  - 配置打包脚本 `"scripts": {"build": "vite build"}`
  - 运行打包指令 `pnpm run build`，并重新配置 package.json 的主入口文件 `{ "main": "dist/index.js" }`

## 从零开始一个 JS 组件库

- 关键词

1. Module 模块
2. Bundler 打包工具: Rollup
3. NPM
4. CI/CD: Travis CI

- 关键点

### JS 项目中，我们为什么要使用 bundler 打包工具呢？

在 JavaScript 项目中，使用打包工具（如 Webpack、Parcel 等）有几个重要的原因：

1. 模块化管理：使用打包工具可以将项目中的代码分割成多个模块，使得代码更加可维护、可复用。这样可以避免全局命名空间的污染，提高代码的可读性和可维护性。

2. 依赖管理：打包工具可以自动解析项目中的依赖关系，并将它们打包成一个或多个文件。这样，可以避免手动管理依赖关系，减少了手动引入和加载文件的工作量。

3. 资源优化：打包工具可以对项目中的资源（如 JavaScript、CSS、图片等）进行优化，包括压缩、合并、代码分割等。这样可以减小文件的大小，提高页面加载速度，提升用户体验。

4. 兼容性处理：打包工具可以对项目中的代码进行转换和兼容处理，以适应不同浏览器和环境的需求。例如，可以使用 Babel 将 ES6+的代码转换为 ES5 代码，以支持旧版本浏览器。

总之，使用打包工具可以提高开发效率、优化项目性能，并提供更好的代码管理和维护能力。

### webpack 和 rollup 的异同？

webpack 和 rollup 都是 JavaScript 的 Bundler 打包工具，但是，应用方向却是不同：

- webpack 适合构建 Web 应用。
- Rollup 适合构建结构扁平、性能出众的 JS 类库。

- 打包什么类型的文件，供别人使用？
  - esm`推荐`，适用支持 ES Module 规范的环境
  - umd`备用`，一种 JS 通用格式，支持多种环境，就是文件比较大。
  - cjs，适用支持 CommonJS 规范的环境，如 Node.js
- VueJS 插件是什么？—— Vue 插件 (Plugins) 是为了给 Vue 框架添加额外功能的，本质上就是一个拥有 install() 方法的对象，也可以直接是一个安装函数本身。
- VueJS 组件库如何实现按需加载和全局加载这两种方式？
- 如何使用 Rollup 构建 VueJS 组件库？

  - [rollup 快速上手](https://rollupjs.org/tutorial/)
  - 如何处理 .vue 类型的文件？—— `rollup-plugin-vue & rollup-plugin-css-only`
    - 安装 `npm i --no-save vue`,将 vue 依赖包设置为 `peerDependencies`
    - 配置 rollup `external: ["vue"]`,不要将 vue 打包到最终的输出文件中，而是作为一个外部依赖
  - 如何处理模块依赖路径？`@rollup/plugin-node-resolve`
  - 如何支持 `typescript`？—— `rollup-plugin-typescript2 typescript tslib`
  - 安装 `npm i -D rimraf`，并配置新指令 `clean`,手动删除 dist 文件
  - 生成 `esm` & `umd` 两种格式的模块文件
  - 如何在本地测试我们的组件库？

    - 在 zhangxianjue-vue-component 项目中，执行`npm link`创建项目软连接。然后在 package.json 文件中，设置指定默认入口文件`{ "main": "./dist/zhangxianjue-vue-component.umd.js" }`，以及 ES Module 入口文件`{"module": "./dist/zhangxianjue-vue-component.esm.js"}`。为什么要指定 `ES Module` 呢？ES6 支持 Tree Shakeing 机制，如果入口文件是 CommonJS 格式，那么 Tree Shaking 机制将无法生效。然后，我们提供两种入口方式以供选择。
    - 在 examples 项目中，执行`npm link zhangxianjue-vue-component`，创建组件库软连接。

  - 如何发布组件包？
  - 如何部署组件说明文档？
