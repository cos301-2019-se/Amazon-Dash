<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-flex xs6 v-for="instance in instances" :key="instance.id">
        <router-link :to="{ name: 'metrics', params: { instanceId: instance.id }}">
          <ServiceCard :instance="instance"></ServiceCard>
        </router-link>
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
  private mounted() {
    this.$store.dispatch('fetchInstances')
  }

  private get instances() {
    return this.$store.getters.instances
  }
}
</script>
