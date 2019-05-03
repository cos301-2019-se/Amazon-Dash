<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-flex xs6 v-for="service in services" :key="service.id">
        <ServiceCard :title="service.title"></ServiceCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ServiceCard from '@/components/ServiceCard.vue'
import config from '@/config'

@Component({
  components: { ServiceCard },
})
export default class Services extends Vue {
  private services: any[] = []
  private mounted() {
    fetch(config.apiUrl + '/ec2_instances', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: this.$store.getters.token }),
    }).then(response => response.json())
      .then(res => this.services = res)
  }
}
</script>
