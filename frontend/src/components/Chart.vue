<template>
  <div class="chart"></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Anychart from 'anychart'

@Component({
  name: 'ad-chart',
})
export default class ADChart extends Vue {
  @Prop() options
  chart = null

  mounted() {
    if (!this.chart && this.options) {
      this.init()
    }
  }

  init() {
    if (!this.chart && this.options) {
      this.chart = new Anychart.fromJson(this.options)
      this.chart.container(this.$el).draw()
    }
  }

  @Watch('options')
  onOptionsChange(options) {
    if (!this.chart && options) {
      this.init()
    } else {
      this.chart.dispose()
      this.chart = null
      this.init()
    }
  }
}
</script>
