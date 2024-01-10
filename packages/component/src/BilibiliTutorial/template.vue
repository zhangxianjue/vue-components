<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
        <a v-if="downloadLink" :href="downloadLink">
          <el-button type="primary" text>
            下载素材<el-icon class="el-icon--right"><Download /></el-icon>
          </el-button>
        </a>
      </div>
    </template>
    <div class="image-text-card-content">
      <iframe id="myVideo" :src="videoSrc" frameborder="0" scrolling="no" allow="autoplay" framespacing="0" allowfullscreen="" autoplay="autoplay"></iframe>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "BilibiliTutorial",
  props: {
    aid: {
      type: String,
      required: true,
      default: "",
    },
    title: {
      type: String,
      default: "BiliBili 视频教程",
    },
    downloadLink: {
      type: String,
      default: "",
    },
  },
  computed: {
    videoSrc() {
      return `//player.bilibili.com/player.html?aid=${this.aid}&amp;cid=&amp;page=&amp;high_quality=1&amp;danmaku=0&amp;as_wide=1`;
    },
  },
};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-icon {
  margin-top: 1px;
  margin-right: 5px;
}
.image-text-card-content {
  max-height: 500px;
  overflow-y: auto;
}

.image-text-card-content iframe {
  width: 100%;
  height: 300px;
  margin: 20px 0;
}
</style>
