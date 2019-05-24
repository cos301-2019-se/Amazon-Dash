<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-flex xs6 v-for="service in $store.getters.instances" :key="service.id">
        <ServiceCard :title="service.KeyName"></ServiceCard>
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
  private services: any[] = []
  private mounted() {
    this.$store.dispatch('fetchInstances')
  }
}
</script>
