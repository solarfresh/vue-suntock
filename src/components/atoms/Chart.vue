<template>
  <canvas
    :width="width"
    :height="height"
    ref="chart">
  </canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'Chart',
  props: {
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    type: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      chart: null
    }
  },
  computed: {
    canvas: function () {
        return this.$refs['chart'];
    },
    ctx: function () {
        return this.canvas.getContext('2d');
    }
  },
  mounted () {
    if (this.$data._chart) this.$data._chart.destroy();

    this.$data.chart = new Chart(
      this.ctx, {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }
}
</script>