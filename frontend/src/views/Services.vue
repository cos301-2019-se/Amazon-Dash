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
        <ServiceCard :instance="instance" class="instance"></ServiceCard>
      </v-flex>
      <v-footer
      app>
        <v-dialog v-model="dialog" max-width="700" class="ma-5">
          <template v-slot:activator="{ on }">
            <v-btn
              color="accent"
              dark
              absolute
              top
              right
              fab
              v-on="on"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">Add a service</v-card-title>
            <v-form
              ref="form"
              lazy-validation
            >
              <v-text-field
                label="Image Id"
                v-model="imageId"
                required
              ></v-text-field>

              <v-text-field
                label="Instance Type"
                v-model="instanceType"
                required
              ></v-text-field>

              <v-text-field
                label="Kernel Id"
                v-model="kernelId"
                required
              ></v-text-field>

              <v-text-field
                label="Max Count"
                v-model="maxCount"
                required
              ></v-text-field>

              <v-text-field
                label="Min Count"
                v-model="minCount"
                required
              ></v-text-field>

              <v-btn
                color="accent"
                class="mr-4"
                @click="submitCreateInstance"
                right
              >
                Submit
              </v-btn>
            </v-form>
          </v-card>
        </v-dialog>
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

  private searchFilter = ''
  private dialog = false
  private imageId = ''
  private instanceType = ''
  private kernelId = ''
  private maxCount = 1
  private minCount = 1

  public beforeDestroy() {
    this.$store.dispatch('unsubscribe')
  }
  private mounted() {
    this.$store.dispatch('subscribe')
  }

  private submitCreateInstance() {
    const body = {
      image_id: this.imageId,
      instance_type: this.instanceType,
      kernel_id: this.kernelId,
      max_count: this.maxCount,
      min_count: this.minCount,
    }
    this.$store.dispatch('createInstance', body)
    this.dialog = false
    this.imageId = ''
    this.instanceType = ''
    this.kernelId = ''
    this.maxCount = 1
    this.minCount = 1
  }

}
</script>
