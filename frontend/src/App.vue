<template>
  <v-app>
    <v-toolbar app clipped-left>
      <v-btn icon flat @click.stop="drawer = !drawer" v-if="$vuetify.breakpoint.mdAndDown">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title class="headline">
        <span>Amazon Dash</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      app
      :permanent="$vuetify.breakpoint.lgAndUp"
      class="blue"
    >
      <v-list>
        <v-list-tile v-for="(item, i) in drawerItems" :key="i" @click="$router.push(item.href); drawer = false">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

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
  private drawer = this.$vuetify.breakpoint.lgAndUp
  private drawerItems: Array<{ title: string, href: string, icon: string }> = [
    { title: 'Dashboard', href: '/', icon: 'home' },
    { title: 'Calculator', href: '/calculator', icon: 'mdi-calculator' },
    { title: 'Alarm', href: '/alarm', icon: 'alarm' }
  ]
  private get snackbar() {
    return this.$store.getters.snackbar
  }
}
</script>
