<template>
  <v-container fluid fill-height grid-list-xl>
    <v-layout row wrap justify-center>
      <v-flex xs1>
        <v-btn flat @click="$router.push('/')">
          <v-icon>arrow_back</v-icon>
          &nbsp;
          Back
        </v-btn>
      </v-flex>
      <v-flex sm11 md5 lg3>
        <h1 class="heading">Metrics for {{ instance ? instance.name : '' }}</h1>
      </v-flex>
      <v-flex sm12 md6 lg8>
        <v-text-field
          class="search-bar"
          label="Filter Metrics"
          v-model="searchFilter"
          prepend-inner-icon="search"
          solo
          clearable
          type="text"
          ></v-text-field>
      </v-flex>
      <v-flex xs12 md6 lg4 v-for="metric in metrics" :key="metric.id" column>
        <MetricCard :metric="metric" class="metric-card"></MetricCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import MetricCard from '@/components/MetricCard.vue'
import { Instance } from '@/models/instance'
import { Metric } from '@/models/metric'

@Component({
  components: { MetricCard },
})
export default class Metrics extends Vue {

  @Prop() public instanceId!: string
  public searchFilter = ''

  public beforeDestroy() {
    this.$store.dispatch('unsubscribe')
  }

  private mounted() {
    this.$store.dispatch('subscribe')
  }

  private get instance(): Instance {
    return this.$store.getters.instances.find((i: Instance) => i.id === this.instanceId)
  }

  private get metrics() {
    return this.instance ? this.instance.getMetrics(this.searchFilter) : []
  }
}
</script>
