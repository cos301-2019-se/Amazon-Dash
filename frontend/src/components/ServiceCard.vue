<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
      <v-card-title>
        <span class="headline">{{ instance.name }}</span>
      </v-card-title>
    </v-card>
  </v-hover>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Instance } from '@/models/instance'

@Component
export default class ServiceCard extends Vue {
  @Prop() public instance: Instance
}
</script>
