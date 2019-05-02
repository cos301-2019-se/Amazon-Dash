<template>
    
</template>

<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >

       <div class="card my-5">
        <div class="card-body">
            <h5 class="text-center card-title">{{ service.title }}</h5>
        </div>
    </div>

    </v-layout>
  </v-container>
</template>


<script>
export default{
    props:['service']

}

</script>
