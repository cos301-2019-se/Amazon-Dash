<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
      <v-sheet :color="instance.stateColour" elevation="12">
        <la-cartesian :data="chartData" :height="200" :bound="[0, 100]">
          <la-line animated curve color="white" prop="value"></la-line>
          <la-y-axis color="white"></la-y-axis>
          <la-tooltip></la-tooltip>
        </la-cartesian>
      </v-sheet>
      <v-menu>
        <v-btn slot="activator" icon small flat><v-icon>more_vert</v-icon></v-btn>
        <v-list>
          <v-list-tile @click="stop" v-if="instance.running">Stop</v-list-tile>
          <v-list-tile @click="start" v-else>Start</v-list-tile>
          <v-list-tile @click="restart">Restart</v-list-tile>
        </v-list>
      </v-menu>
      <v-btn icon small flat style="float: right"><v-icon>info</v-icon></v-btn>
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

@Component
export default class ServiceCard extends Vue {
  @Prop() public instance!: Instance
  chartData = [
    { value: 12 },
    { value: 24 },
    { value: 10 },
    { value: 15 },
  ]

  stop() {
    this.$store.dispatch('stopInstance', this.instance.id)
  }
  restart() {
    this.$store.dispatch('restartInstance', this.instance.id)
  }
  start() {
    this.$store.dispatch('startInstance', this.instance.id)
  }
}
</script>
