<template>
  <div>
    <trend-bar 
      :title="title"
    />
    <chart 
      :height="100"
      :type="'line'"
      :data="lineData">
    </chart>
  </div>
</template>

<script>
import Chart from '@/components/atoms/Chart';
import TrendBar from '@/components/organisms/TrendBar';

export default {
  name: 'TrendChart',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    'chart': Chart,
    'trend-bar': TrendBar
  }
}
</script>
