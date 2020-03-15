<template>
  <canvas ref="chart"></canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'Chart',
  props: {
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
  mounted () {
    if (this.$data._chart) this.$data._chart.destroy();

    this.$data.chart = new Chart(
      this.$refs['chart'].getContext('2d'), {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }
}
</script>