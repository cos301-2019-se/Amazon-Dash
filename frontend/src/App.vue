<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>Amazon Dash</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
    <v-snackbar v-model="snackbar.enabled"
                top
                :timeout="snackbar.timeout"
                :color="snackbar.colour">
      {{ snackbar.message }}
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private get snackbar() {
    return this.$store.getters.snackbar
  }
}
</script>
