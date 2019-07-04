<template>
  <v-container grid-list-md fluid fill-height>
    <v-layout row justify-center>
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
  private mounted() {
    this.$store.dispatch('fetchInstances')
  }

  private get instances() {
    return this.$store.getters.instances
  }
}
</script>
