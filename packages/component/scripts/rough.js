import rough from "roughjs";

export default class GeneratorGraph {
  constructor(canvas, opts = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.roughCanvas = rough.canvas(canvas);
    this.w = 140;
    this.h = 40;
    this.textPadding = 20;
  }
  adaptiveWidth(text) {
    let { ctx, w, textPadding } = this;

    // 文字内容自适应矩形宽度 measureText
    const textWidth = ctx.measureText(text).width;
    if (textWidth > w) {
      w = textWidth + textPadding;
    }
    return w;
  }
  rectangle(text, x, y) {
    let { ctx, roughCanvas, w, h, textPadding } = this;
    ctx.font = "bold 16px Arial";
    ctx.fillStyle = "#000";

    w = this.adaptiveWidth(text);
    roughCanvas.rectangle(x, y, w, h, {
      fill: "#fff",
      fillStyle: "solid",
      roughness: 5,
    });
    ctx.fillText(text, x + textPadding / 2, y + h / 2 + 5);

    return {
      centerX: x + w / 2,
      centerY: y + h / 2,
      x,
      y,
      width: w,
      height: h,
    };
  }
  ellipse(text, x, y) {
    let { ctx, roughCanvas, w, h, textPadding } = this;

    ctx.font = "bold 14px Arial";
    ctx.fillStyle = "#000";

    // 文字内容自适应矩形宽度
    w = this.adaptiveWidth(text);
    const centerX = x + w / 2;
    const centerY = y + h / 2;
    roughCanvas.ellipse(centerX, centerY, w, h, {
      fill: "#ff9587",
      fillStyle: "solid",
      roughness: 2,
    });
    ctx.fillText(text, x + textPadding / 2, y + h / 2 + 5);

    return {
      centerX, // 返回矩形中心点
      centerY,
      x,
      y,
      width: w,
      height: h,
    };
  }
  line(x1, y1, x2, y2) {
    this.ctx.globalCompositeOperation = "destination-over";
    this.roughCanvas.line(x1, y1, x2, y2, { strokeWidth: 3 });
    this.ctx.globalCompositeOperation = "source-over";
  }
}
