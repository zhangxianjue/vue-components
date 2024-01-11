<template>
  <canvas id="roadmapCanvas" :height="canvasHeight"></canvas>
</template>

<script>
import GeneratorGraph from "../../scripts/rough.js";
import { defineComponent } from "vue";

const canvasWidth = 960;
const drawMap = (canvas, datas = []) => {
  const graph = new GeneratorGraph(canvas);
  let lastN, currentN;
  const nodeOffset = 50;
  let direction = 1;
  let autoRectangleNumber = 0; // 计数器，用于生成矩形节点编号
  datas.forEach((item, index, array) => {
    item.type = item.type || "rectangle";
    item.link = item.link || "";
    if (item.type === "rectangle") {
      autoRectangleNumber = autoRectangleNumber + 1;
      item.text = autoRectangleNumber + "." + item.text;
    }
    if (index > 0) {
      // 绘制上一个节点
      let lastItem = array[index - 1];
      lastN = graph[lastItem.type](lastItem.text, lastItem.x, lastItem.y);
      lastItem.width = lastN.width;
      lastItem.height = lastN.height;

      // 获取当前节点信息
      item.x = lastN.x + (lastN.width + nodeOffset) * direction;
      item.y = lastN.y;
      item.height = lastN.height;

      let itemW = graph.adaptiveWidth(item.text);
      if (direction === 1) {
        if (itemW + item.x > canvasWidth) {
          direction = -1;
          item.x = canvasWidth - itemW - 10;
          item.y = item.y + item.height + nodeOffset;
        }
      } else {
        if (lastItem.x - itemW - nodeOffset < 0) {
          direction = 1;
          item.x = 10;
          item.y = item.y + item.height + nodeOffset;
        }
      }

      // 绘制当前节点
      currentN = graph[item.type](item.text, item.x, item.y);
      item.width = currentN.width;
      item.height = currentN.height;

      // 绘制连线
      graph.line(lastN.centerX, lastN.centerY, currentN.centerX, currentN.centerY);
    } else {
      item.x = 10;
      item.y = 60;
    }
  });

  return datas;
};

// 监听 resize,动态设置 canvas 比例
const resizeCanvas = (canvas) => {
  const { offsetWidth } = canvas.parentElement;
  // 如何实现响应式 canvas? —— 借助 transform.scale & transform origin
  canvas.style.transformOrigin = "top left";
  canvas.style.transform = `scale(${offsetWidth / canvasWidth})`;
};

export default defineComponent({
  name: "Roadmap",
  props: {
    currentRouter: Object,
    data: {
      type: Array,
      default: [],
    },
    canvasHeight: {
      default: 500,
    },
  },
  mounted: function () {
    console.log(this.currentRouter);
    const canvas = document.getElementById("roadmapCanvas");

    // 设置画布尺寸
    canvas.width = canvasWidth;
    resizeCanvas(canvas);
    window.addEventListener("resize", () => resizeCanvas(canvas));

    // 绘制图形
    const datas = drawMap(canvas, this.data);

    // 事件监听
    canvas.addEventListener(
      "click",
      (event) => {
        const { clientX, clientY } = event;
        const { offsetWidth } = canvas.parentElement;
        const { left, top } = canvas.getBoundingClientRect();
        const clickX = (clientX - left) / (offsetWidth / canvasWidth);
        const clickY = (clientY - top) / (offsetWidth / canvasWidth);
        datas.forEach((item) => {
          const { x, y, width, height, link } = item;
          if (clickX >= x && clickX <= x + width && clickY >= y && clickY <= y + height) {
            // if (link) router.push(link);
            if (link) this.currentRouter.go(link);
            console.log();
          }
        });
      },
      false
    );
  },
});
</script>
