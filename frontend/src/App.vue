
<template>
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



<style>
  body{
      background-color: #FBF8F3;
  }

</style>
