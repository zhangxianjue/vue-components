<template>
  <el-card>
    <template #header>
      <div>
        <span>组件示例</span>
      </div>
    </template>
    <slot name="content"></slot>
    <!-- <PageHeader content="如何创建一个 gdscript 脚本？" :goBack="goBack" /> -->
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ComponentExample",
  setup() {},
});
</script>
