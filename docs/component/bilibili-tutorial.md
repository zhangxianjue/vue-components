# BilibiliTutorial 小破站视频

## 基础用法

```vue
<bilibili-tutorial :aid="278224723" title="BiliBili 视频教程" downloadLink="#">
</bilibili-tutorial>
```

<bilibili-tutorial title="BiliBili 视频教程" :aid="278224723" downloadLink="#"></bilibili-tutorial>

## API 描述

### Attribute 描述

|    属性名    | 说明                           | 数据类型 |       默认值        |
| :----------: | :----------------------------- | :------: | :-----------------: |
|    title     | 卡片标题                       |  String  | `BiliBili 视频教程` |
|     aid      | BiliBili 视频代码中的 aid 字段 |  String  |        `''`         |
| downloadLink | 是否显示资源下载按钮           |  String  |        `''`         |
