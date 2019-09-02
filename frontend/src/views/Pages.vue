<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-title primary-title>
            <div>
               <h3 class="headline mb-0">Instance Name</h3>
               <div style="font-size: 140%">List of instances</div>
            </div>
          </v-card-title>
        </v-card>     
      </v-flex>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Total Cost</h3>
              <div style="font-size: 140%">${{ cost }}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>   
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Cost extends Vue {
   private cost = 500
  }
</script>