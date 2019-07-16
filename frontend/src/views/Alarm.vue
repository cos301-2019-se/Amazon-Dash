<template>
  <div>

    <v-spacer></v-spacer>

      <div class="display-2 pt-3 pb-3">Create alarm</div>

    <v-tabs v-model="active" color="cyan" dark slider-color="yellow">

      <v-tab >
        1. Select metric
      </v-tab>
      <v-tab-item >
        <v-card flat>
          <v-card-text>  </v-card-text>

        <v-layout row wrap>
            <v-flex xs4 sm3 md2 lg2 xl2 >
              <v-select :items="items" label="Instances" class="pl-1 pr-4" outline>
              </v-select>
            </v-flex>

            <v-flex xs12 sm6 md3 d-flex>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                class="pl-3"
                hide-details
                placeholder="Instance id.."
              >

              </v-text-field>
            </v-flex>
        </v-layout row wrap>

        <v-layout row wrap>
        <v-data-table
           :headers="headers"
           :items="instances"
           class="elevation-1"

          >


           <template v-slot:items="props">
             <td class="mr-5">{{ props.item.instanceId }}</td>
             <td class="text-xs-left">{{ props.item.instanceName }}</td>
             <td class="text-xs-left">{{ props.item.metricName }}</td>
           </template>
          </v-data-table>

        </v-layout row wrap>
        </v-card>
      </v-tab-item>


      <v-tab>

        2. Define Alarm
      </v-tab>
      <v-tab-item >
        <v-card flat>

          <v-card-text class="display-1 ml-2 pt-3 pb-3">Alarm Threshold</v-card-text>
          <v-card-text >Provide the details and threshold for your alarm.</v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab >
        Step 3
      </v-tab>
      <v-tab-item >
        <v-card flat>
          <v-card-text></v-card-text>
        </v-card>
      </v-tab-item>

    </v-tabs>

    <div class="text-xs-center mt-3">
      <v-btn @click="next">next tab</v-btn>
    </div>

  </div>
</template>


<script>
  export default {
    data () {
      return {
        active: null,
        items: ['EC2', 'S3', 'ECR', 'EKS'],
        headers: [
          {
            text: 'InstanceId',
            align: 'left',
            sortable: false,
            value: 'name'
          }
          ,
          {
            text: 'InstanceName',
            align: 'left',
            sortable: false,
            value: 'name'
          }

          ,
          {
            text: 'Metric Name',
            align: 'left',
            sortable: false,
            value: 'name'
          }
        ],

        instances: [
          {
            instanceId: 'i-092ed4e40aec56ff1',
            instanceName: 'CloudWatch-Event1',
            metricName: 'CPUBalance',
          },
          {
            instanceId: 'i-423434ed4e40aec56ff1',
            instanceName: 'CloudWatch-Event2',
            metricName: 'CPUUsage',
          },
          {
            instanceId: 'i-5034e43e40aec56ff1',
            instanceName: 'CloudWatch-Event3',
            metricName: 'CPUSurplus',
          },

          ],

















      }










    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    }
  }
</script>

<style>
#check{
margin:5px;
}



</style>
