<template>
  <v-app>
    <v-toolbar app clipped-left color="primary">
      <v-btn icon flat @click.stop="drawer = !drawer" v-if="$vuetify.breakpoint.mdAndDown && authenticated">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title class="headline">
        <span>Amazon Dash</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$store.dispatch('logout')">
        <v-icon>logout</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      v-if="authenticated"
      app
      :permanent="$vuetify.breakpoint.lgAndUp"
    >
      <v-list>
        <v-list-tile v-for="(item, i) in drawerItems" :key="i" @click="$router.push(item.href); drawer = false"
          :color="isCurrentRoute(item.href) ? 'accent' : undefined">
          <v-list-tile-action>
            <v-icon :color="isCurrentRoute(item.href) ? 'accent' : undefined">{{ item.icon }}</v-icon>
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
  ]
  private get snackbar() {
    return this.$store.getters.snackbar
  }

  private get authenticated() {
    return !!this.$store.getters.token
  }

  private isCurrentRoute(route: string) {
    return this.$router.currentRoute.path.endsWith(route);
  }
}
</script>
