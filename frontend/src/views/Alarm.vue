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

        <v-container>
          <v-layout row wrap>
              <v-flex xs4 sm3 md2 lg2 xl2 >
                <v-select :items="items" label="Instances" class="pl-1 pr-4" outline></v-select>
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
        </v-container>

        <v-container>
          <v-layout row wrap>
          <v-data-table
             :headers="headers"
             :items="instances"
             class="elevation-1"
              >
                <template v-slot:items="props">
                  <v-checkbox
                     v-model="checkbox"
                     :error-messages="checkboxErrors"
                     label=""
                     required
                     @change="$v.checkbox.$touch()"
                     @blur="$v.checkbox.$touch()"
                   ></v-checkbox>

                   <td class="text-xl-center">{{ props.item.instanceId }}</td>
                   <td class="text-xs-right">{{ props.item.instanceName }}</td>
                   <td class="text-xs-left">{{ props.item.metricName }}</td>
                </template>
              </v-data-table>
            </v-layout row wrap>
          </v-container>
        </v-card>

      </v-tab-item>
      <v-tab>

        2. Define Alarm
      </v-tab>
      <v-tab-item >
        <v-card flat>
          <v-container>
              <v-card-text class="display-1 ml-2 pt-3 pb-0">Alarm Threshold</v-card-text>
              <v-card-text class="mb-0">You can use alarms to be notified automatically whenever metric data reaches a level you define</v-card-text>

              <v-layout row wrap>
                   <v-flex xs4 sm3 md2 lg2 xl2>
                     <v-subheader class="grey--text text--darken-4">Topic name:</v-subheader>
                   </v-flex>

                   <v-flex xs4 sm3 md2 lg2 xl2>
                     <v-text-field
                       label=""
                       solo
                     ></v-text-field>
                   </v-flex>
             </v-layout>

            <v-layout row wrap>
                 <v-flex xs4 sm3 md2 lg2 xl2>
                   <v-subheader class="grey--text text--darken-4">Recipient:</v-subheader>
                 </v-flex>

                 <v-flex xs4 sm3 md2 lg2 xl2>
                   <v-text-field
                     label=""
                     solo
                     class=""
                   ></v-text-field>
                 </v-flex>
           </v-layout>

           <v-layout row wrap>
                <v-flex xs4 sm3 md2 lg2 xl2>
                  <v-subheader class="grey--text text--darken-4">Take action:</v-subheader>
                </v-flex>
                <v-flex xs4 sm3 md2 lg2 xl2>
                <v-radio-group v-model="radios" :mandatory="false">
                     <v-radio label="Recover this instance" value="radio-1" ></v-radio>
                     <v-radio label="Stop this instance" value="radio-2"></v-radio>
                     <v-radio label="Terminate this instance" value="radio-3"></v-radio>
                     <v-radio label="Reboot this instance" value="radio-4"></v-radio>
                </v-radio-group>
                </v-flex>
          </v-layout>
          </v-container>

          <v-divider></v-divider>

          <v-container>
            <v-layout row wrap>
                 <v-flex xs4 sm3 md2 lg2 xl2>
                   <v-subheader class="grey--text text--darken-4">Whenever:</v-subheader>
                 </v-flex>
                 <v-flex xs4 sm3 md2 xl2 lg6 xl2>
                   <v-select :items="states" label="Status Check Failed" pa-3 mr-4 solo auto></v-select>
                 </v-flex>
           </v-layout>

           <v-layout row wrap>
              <v-flex xs4 sm3 md2 lg2 xl2>
                <v-subheader class="grey--text text--darken-4">Is:</v-subheader>
              </v-flex>
              <v-flex xs4 sm3 md2 lg2 xl2>
                <v-card-text>Failing</v-card-text>
              </v-flex>
          </v-layout>

          <v-layout row wrap>
             <v-flex xs4 sm3 md2 lg2 xl2>
               <v-subheader class="grey--text text--darken-4">For atleast:</v-subheader>
             </v-flex>
             <v-flex xs4 sm3 md2 lg2 xl2>
               <v-text-field
                 label=""
                 solo
                 class=""
               ></v-text-field>
              </v-flex>

              <v-flex xs4 sm3 md2 lg2 xl2>
                <v-card-text>consecutive period(s) of</v-card-text>
              </v-flex>

              <v-flex xs4 sm3 md2 xl2 lg6 xl2>
                <v-select :items="time" label="1 Minute" class="pr-6" solo auto></v-select>
              </v-flex>


         </v-layout>
         </v-container>

         <v-divider></v-divider>

         <v-container>

           <v-layout row wrap>
                <v-flex xs4 sm3 md2 lg2 xl2>
                  <v-subheader class="grey--text text--darken-4">Name of alarm:</v-subheader>
                </v-flex>
                <v-flex xs4 sm3 md2 lg2 xl2>
                  <v-text-field
                    label=""
                    solo
                    class=""
                  ></v-text-field>
                </v-flex>

          </v-layout>


              <div>
                <v-btn small color="primary">Create alarm</v-btn>
              </div>

              <div>
                <v-btn flat small color="primary">Cancel</v-btn>
              </div>


        </v-container>

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
      <v-btn @click="next">next</v-btn>
    </div>

  </div>
</template>


<script>
  export default {
    data () {
      return {
        active: null,
        items: ['EC2', 'S3', 'ECR', 'EKS'],
        states:['CPU Utilization','Disk Reads','Disk Writes','Network In','CPU Credit Usage'],
        time:['1 Minute','5 Minutes','15 Minutes','1 Hour','6 Hours'],
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

           checkbox: false,
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
.item {
   padding-right:20px;
   margin:5px;
 }


</style>
