import Vue, { VueConstructor } from 'vue'
import { AxiosInstance } from 'axios'

declare global {
  interface Window {
    axios: AxiosInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
    $gAuth: any;
  }
  interface VueConstructor {
    $axios: AxiosInstance
    $gAuth: any;
  }
}
