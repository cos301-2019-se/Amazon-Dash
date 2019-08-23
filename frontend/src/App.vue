<style lang="scss">
.toolbar-title {
  margin-right: 2rem;
}
</style>

<template>
  <v-app>
    <v-toolbar app color="primary" dark>
      <v-btn icon flat @click.stop="drawer = !drawer" v-if="$vuetify.breakpoint.smAndDown && authenticated">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title class="toolbar-title">
        Amazon Dash
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down" v-if="$store.getters.authenticated">
        <v-btn flat
               v-for="(item, i) in drawerItems"
               :key="i"
               @click="$router.push(item.href)">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-tooltip bottom v-if="$store.getters.authenticated">
        <template v-slot:activator="{ on }">
          <v-btn icon @click="$store.dispatch('logout')" v-on="on">
            <v-icon>logout</v-icon>
          </v-btn>
        </template>
        <span>Log Out</span>
      </v-tooltip>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      v-if="$vuetify.breakpoint.smAndDown && authenticated"
      app
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
                bottom right
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
  private drawer = false
  private drawerItems: Array<{ title: string, href: string, icon: string }> = [
    { title: 'Dashboard', href: '/', icon: 'home' },
 feature/create_alarm
    { title: 'Calculator', href: '/calculator', icon: 'mdi-calculator' },
    { title: 'Alarm', href: '/alarm', icon: 'alarm' }
=======
 develop
  ]
  private get snackbar() {
    return this.$store.getters.snackbar
  }

  private get authenticated() {
    return !!this.$store.getters.token
  }

  private isCurrentRoute(route: string) {
    return this.$router.currentRoute.path.endsWith(route)
  }
}
</script>
