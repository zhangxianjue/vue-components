# ComponentExample 组件示例

## 基础用法

```vue
<ComponentExample>
  <template #content>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </template>
</ComponentExample>
```

<ComponentExample>
  <template #content>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </template>
</ComponentExample>

## API 描述

### slots 描述

| 插槽名  | 说明                 | 默认值 |
| :------ | :------------------- | :----- |
| content | 自定义组件示例的内容 | `—`    |
