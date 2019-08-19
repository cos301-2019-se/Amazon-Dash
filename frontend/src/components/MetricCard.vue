<template>
  <v-card class="mx-auto">
    <v-sheet color="blue-grey darken-1"
             elevation="12"
             height="200px">
      <la-cartesian v-if="metric.data.length" :data="metric.data" :height="200" :bound="bounds" autoresize>
        <la-line animated :width="2" curve prop="value" color="white"></la-line>
        <la-y-axis color="white" prop="value" :nbTicks="5"></la-y-axis>
        <la-tooltip></la-tooltip>
      </la-cartesian>
      <v-container v-else fill-height>
        <v-layout row wrap align-center>
          <v-flex class="text-xs-center">
            <v-progress-circular
              :size="70"
              :width="7"
              indeterminate
              color="primary"
              ></v-progress-circular>
          </v-flex>
        </v-layout>
      </v-container>
    </v-sheet>
    <v-card-title>
      <span class="headline">{{ name }}</span>
    </v-card-title>
    <v-card-text>
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import {
  Metric,
  MetricData,
  metricOptions,
  getMetricBounds,
  getMetricName,
  metricDescriptions,
} from '@/models/metric'
import { MetricViewClass } from '@/models/metricView'

@Component
export default class MetricCard extends Vue {
  @Prop() public metric!: MetricViewClass
  public mounted() {
    if (this.metric.id === 'cpu') {
      this.metric.data.map(i => {
        i.value = i.value * 100
      })
    }
  }

  private get bounds() {
    return getMetricBounds(this.metric.id)
  }

  private get name() {
    return getMetricName(this.metric.id)
  }

  private get description() {
    return metricDescriptions[this.metric.id]
  }
}
</script>
