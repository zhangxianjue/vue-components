# PageHeader 头部导航

## 基础用法

PageHeader 组件中的返回按钮`← Back`，默认返回上一级 `window.history.back()`。

如果你需要指定返回路由的话，可以使用 `goBack` 方法

```vue
<PageHeader content="如何创建一个 gdscript 脚本？" :goBack="goBack" />

<script setup>
import { useRouter } from "vitepress";

const router = useRouter();
const goBack = () => {
  return router.go("/");
};
</script>
```

<ComponentExample>
  <template #content>
       <PageHeader content="如何创建一个 gdscript 脚本？"  :goBack="goBack" />
    </template>
</ComponentExample>

<script setup>
import { useRouter } from "vitepress";
const router = useRouter()
const goBack = () => { 
  return router.go("/")
}
</script>

## API 描述

### Attribute 描述

| 属性名  | 说明                           | 数据类型 |             默认值             |
| :-----: | :----------------------------- | :------: | :----------------------------: |
| content | 头部导航内容                   |  String  |              `—`               |
| goBack  | 指定返回按钮`← Back`的返回路径 | Function | `() => window.history.back();` |
