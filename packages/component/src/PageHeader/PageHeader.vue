<template>
  <el-affix :offset="60">
    <el-page-header @back="goBack" class="el-page-header">
      <template #content>
        <span class="text-large font-600 mr-3">
          {{ content }}
        </span>
      </template>
    </el-page-header>
  </el-affix>
</template>

<script>
import { defineComponent } from "vue";
import { ElPageHeader, ElAffix } from "element-plus";
export default defineComponent({
  name: "PageHeader",
  props: {
    content: String,
    goBack: {
      type: Function,
      default: () => {
        window.history.back();
      },
    },
  },
  component: [ElPageHeader, ElAffix],
  setup() {},
});
</script>

<style>
.el-page-header {
  background-color: #fff;
  padding: 30px 0;
  margin-top: -5px;
}
</style>
