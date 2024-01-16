<template>
  <div>
    <canvas ref="canvas" width="400" height="400"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawGraph();
  },
  methods: {
    drawGraph() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');

      // Определение значений x и y
      const xValues = [0, 1/3, 1, 3, 5/3, 7, 3/5, 1/7];
      const yValues = [];

      // Вычисление соответствующих y-значений для каждого x
      for (let i = 0; i < xValues.length; i++) {
        const x = xValues[i];
        const y = Math.sqrt(1 / Math.pow(x + 1, 2) - Math.pow(x, 2));
        yValues.push(y);
      }

      // Масштабирование значений x и y для отображения на холсте
      const scaleX = canvas.width / (Math.max(...xValues) - Math.min(...xValues));
      const scaleY = canvas.height / (Math.max(...yValues) - Math.min(...yValues));

      // Рисование графика
      ctx.beginPath();
      ctx.moveTo(xValues[0] * scaleX, yValues[0] * scaleY);

      for (let i = 1; i < xValues.length; i++) {
        const x = xValues[i] * scaleX;
        const y = yValues[i] * scaleY;
        ctx.lineTo(x, y);
      }

      ctx.stroke();
    }
  }
};
</script>

<style scoped>
canvas {
  border: 1px solid black;
}
</style>
