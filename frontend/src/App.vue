
<template>
    <v-app>
    <v-toolbar>
        <v-toolbar-title class="headline text-uppercase">
        <span>Amazon Dash</span>
        </v-toolbar-title>
    </v-toolbar>
    <v-content app>
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="row">
                    <div :key="service.id" class="col-md-6" v-for="service in services">
                          <service :service="service"></service>
                    </div>
                </div>
            </div>
            <div class="col-md-5"></div>
        </div>
    </div>
    </v-content>
    </v-app>
</template>

<script>


import services from '@/services.json'
import Service from '@/components/Service.vue';


export default {
  name: 'app',

  components:{
    Service
  },

  data(){
      return{
          services
      }
  }
}
</script>

</style>
