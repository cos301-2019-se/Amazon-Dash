<template>
  <v-container grid-list-md fluid fill-height>
    <v-layout row wrap justify-center>
      <v-flex xs12 md6 lg4 v-for="instance in instances" :key="instance.id">
        <ServiceCard :instance="instance"></ServiceCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ServiceCard from '@/components/ServiceCard.vue'

@Component({
  components: { ServiceCard },
})
export default class Services extends Vue {

  private get instances() {
    return this.$store.getters.instances
  }
  private instancePoller = -1

  public beforeDestroy() {
    clearInterval(this.instancePoller)
  }
  private mounted() {
    this.$store.dispatch('fetchInstances')
    this.instancePoller = setInterval(() => this.$store.dispatch('fetchInstances'), 5000)
  }
}
</script>
