<style>
.progress {
    margin: auto;
}
.progress-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
<template>
  <v-container grid-list-xl fluid fill-height>
    <div v-if="!$store.getters.instances.length" class="progress-container">
        <v-progress-circular indeterminate color="accent" :size="80"></v-progress-circular>
    </div>
    <v-layout v-if="$store.getters.instances.length" row wrap align-content-start justify-center>
      <v-flex sm12 md6 lg4>
        <h1 class="heading">Dashboard</h1>
      </v-flex>
      <v-flex sm12 md6 lg8>
        <v-text-field solo clearable v-model="searchFilter" prepend-inner-icon="search" placeholder="Filter Instances" class="search-bar"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 lg4 v-for="instance in instances" :key="instance.id">
        <ServiceCard :instance="instance"></ServiceCard>
      </v-flex>
      <v-footer
      app>
        <v-btn
                v-show="!hidden"
                primary
                dark
                absolute
                top
                right
                fab
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-footer>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Instance } from '@/models/instance'
import ServiceCard from '@/components/ServiceCard.vue'

@Component({
  components: { ServiceCard },
})
export default class Services extends Vue {

  private get instances() {
    return this.$store.getters.instances
      .filter((i: Instance) => i.name.toLowerCase().includes((this.searchFilter || '').toLowerCase()))
  }

  private instancePoller = -1
  private searchFilter = ''

  public beforeDestroy() {
    clearInterval(this.instancePoller)
  }
  private mounted() {
    this.$store.dispatch('fetchInstances')
    this.instancePoller = setInterval(() => this.$store.dispatch('fetchInstances'), 5000)
  }

}
</script>
