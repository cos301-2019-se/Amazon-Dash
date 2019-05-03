<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>
    </v-card>
  </v-hover>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ServiceCard extends Vue {
  @Prop() public title?: string
}
</script>
