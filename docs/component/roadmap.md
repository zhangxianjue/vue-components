# Roadmap 路线图

## 基础用法

```vue
<Roadmap :data="data" :currentRouter="router" :height="150"></Roadmap>

<script setup>
import { useRouter } from "vitepress";

const router = useRouter();
const data = [
  { type: "rectangle", text: "ComponentExample 组件示例", link: "/component/component-example" },
  { type: "rectangle", text: "ComponentExample 组件示例", link: "/component/component-example" },
  { type: "ellipse", text: "PageHeader 头部导航", link: "/component/page-header" },
];
</script>
```

<ComponentExample>
  <template #content>
       <Roadmap :data="data" :currentRouter="router" :height="150"></Roadmap>
    </template>
</ComponentExample>

<script setup>
import { useRouter } from "vitepress";

const router = useRouter();
const data = [
    { type: "rectangle", text: "ComponentExample 组件示例", link:"/component/component-example" },
    { type: "rectangle", text: "ComponentExample 组件示例", link:"/component/component-example" },
    { type: "ellipse", text: "PageHeader 头部导航", link:"/component/page-header" },
]
</script>

## API 描述

### Attribute 描述

|    属性名     | 说明                      | 数据类型 | 默认值 |
| :-----------: | :------------------------ | :------: | :----: |
|     data      | 数据内容                  |  Array   |  `[]`  |
| currentRouter | 当前项目的路由对象 Router |  Object  |  `-`   |
|    height     | 画布容器的高度            |  Number  | `500`  |
