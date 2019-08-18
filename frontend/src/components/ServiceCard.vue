<style>
.loading-box {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  height: 100%;
  font-size: 2em;
}
.metric-label {
  position: absolute;
  top: .5rem;
  right: .5rem;
  color: white;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
      <v-sheet :color="instance.stateColour" elevation="12" height="200px">
        <la-cartesian v-if="instance.getMetric(metric.id).length" :data="instance.getMetric(metric.id)" :height="200" autoresize :bound="metric.bound">
          <la-line animated curve color="white" prop="value"></la-line>
          <la-y-axis color="white" :nbTicks=5></la-y-axis>
          <la-tooltip></la-tooltip>
        </la-cartesian>
        <div v-else class="loading-box">
          Loading Metrics...
        </div>
        <div class="metric-label" v-if="instance.getMetric(metric.id).length">
          <span>{{ metric.name }} ({{ metric.unit }})</span>
          <v-menu>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on">
                <v-icon>arrow_drop_down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-tile
                v-for="(item, index) in metricOptions"
                :key="index"
                @click="metricIndex = index">
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-sheet>
      <v-menu>
        <v-btn slot="activator" icon small flat><v-icon>more_vert</v-icon></v-btn>
        <v-list>
          <v-list-tile @click="stop" v-if="instance.running">Stop</v-list-tile>
          <v-list-tile @click="start" v-else>Start</v-list-tile>
          <v-list-tile @click="restart">Restart</v-list-tile>
        </v-list>
      </v-menu>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon small flat style="float: right" v-on:click="goToMetricView(instance.id)"><v-icon>info</v-icon></v-btn>
        </template>
        <span>View Service Details</span>
      </v-tooltip>
      <v-card-title>
        <span class="headline">{{ instance.name }}</span>
        <v-spacer></v-spacer>
        <span class="font-weight-light">{{ instance.stateName }}</span>
      </v-card-title>
    </v-card>
  </v-hover>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Instance } from '@/models/instance'
import { metricOptions } from '@/models/metric'

@Component
export default class ServiceCard extends Vue {
  private get metric() {
    return this.metricOptions[this.metricIndex]
  }
  @Prop() public instance!: Instance

  public metricIndex = 0
  public metricOptions = metricOptions
  private metricPoller = -1

  public mounted() {
    this.metricPoller = setInterval(() => this.getMetrics(), 5000)
  }

  public beforeDestroy() {
    clearInterval(this.metricPoller)
  }
  public goToMetricView(id: string) {
    this.$router.push({ path: `/instances/${id}` })
  }

  private getMetrics() {
    this.$store.dispatch('getInstanceMetrics', this.instance.id)
  }

  private stop() {
    this.$store.dispatch('stopInstance', this.instance.id)
  }
  private restart() {
    this.$store.dispatch('restartInstance', this.instance.id)
  }
  private start() {
    this.$store.dispatch('startInstance', this.instance.id)
  }
}
</script>
