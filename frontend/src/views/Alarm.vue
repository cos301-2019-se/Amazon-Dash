<template>
  <div>
    <v-container>
    <v-spacer></v-spacer>
      <div class="display-2 pt-3 pb-2">Create alarm</div>

<!------------------------------------- First Tab begins ------------------------------------------------->
    <v-tabs v-model="active" color="primary" dark slider-color="yellow">
      <!-- Selecting metrics -->
      <v-tab>
        1. Select metric
      </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-container>
                <v-layout row wrap>
                    <div class="display-2 pb-2">Metric</div>
                </v-layout>

                    <v-divider></v-divider>
                    <div class="pt-3 ml-2 grey--text">Graph</div>
                    <div class="grey--text ml-2 mb-2">Preview of the metric or metric expression and the alarm threshold.</div>

                    <v-layout row justify-center>
                    <v-btn color="normal" class="right"  @click.stop="dialog = true">Select metric</v-btn>

                    <v-dialog v-model="dialog" max-width="290" fullscreen >
                      <v-card flat>
                        <div><v-card-title class="headline grey--text">Select metric</v-card-title></div>
                        <v-divider></v-divider>

                        <v-container>
                          <v-card class="">
                            <v-layout row>
                              <v-flex xs12 md12>
                                <v-card flat left>
                                      <v-tabs  color="grey lighten-2"  slider-color="yellow">
                                        <v-divider></v-divider>
                                          <v-tab>All metrics</v-tab>
                                            <v-tab-item>

                                        <v-container>
                                          <v-card flat color="white">
                                            <v-layout row>
                                                <v-flex xs12 md12>
                                                  <v-layout row>
                                                    <v-divider></v-divider>
                                                      <v-flex xs12 md8>
                                                        <v-text-field solo  v-model="searc" append-icon="search" label="Search for any metric, dimension or resource id" single-line hide-details></v-text-field>
                                                      </v-flex>

                                                      <v-flex xs12 md4>
                                                        <div>
                                                          <v-btn large solo color="normal" pb-1 class="">Graph</v-btn>
                                                        </div>
                                                      </v-flex>
                                                  </v-layout>
                                                </v-flex>
                                              </v-layout>

                                            <v-container>
                                              <v-card flat>
                                                <v-layout row>
                                                  <v-flex xs12 md2>
                                                    <v-card flat color="blue-grey lighten-5 mr-3 ml-1  pa-auto" >
                                                      <v-card-title >
                                                        <div class="blue--text">EBS</div>
                                                      </v-card-title>
                                                        <div class="grey--text ml-3 pb-2">5 metrics</div>
                                                    </v-card>
                                                  </v-flex>

                                                  <v-flex xs12 md2>
                                                    <v-card flat color="blue-grey lighten-5 mr-2 ml-3  pa-auto">
                                                      <v-card-title >
                                                        <div class="blue--text">EFS</div>
                                                      </v-card-title>
                                                        <div class="grey--text ml-3 mr-3 pb-2">18 metrics</div>
                                                    </v-card>
                                                  </v-flex>

                                                  <v-flex xs12 md3>
                                                    <v-card flat color="blue-grey lighten-5 mr-5 ml-4 pa-auto">
                                                      <v-card-title >
                                                        <div class="blue--text">S3</div>
                                                      </v-card-title>
                                                        <div class="grey--text ml-3 pb-2">4 metrics</div>
                                                    </v-card>
                                                  </v-flex>
                                                </v-layout>
                                            </v-card>
                                          </v-container>
                                        </v-card>
                           </v-container>

          </v-tab-item>

                                    <v-tab>Graphed metrics</v-tab>
                                    <v-tab-item>In progress</v-tab-item>

                                    <v-tab>Graph options</v-tab>
                                    <v-tab-item>In progress</v-tab-item>

                                    <v-tab>Source</v-tab>
                                    <v-tab-item>In progress</v-tab-item>
                                  </v-tabs>
                              </v-card>
                            </v-flex>
                          </v-layout>
                          </v-card>
                        </v-container>

                        <v-card-actions class="ml-5">
                          <v-container>
                            <v-layout row>
                                <v-btn solo color="primary left"  @click="dialog = false">
                                  Cancel
                                </v-btn>

                                <v-btn solo color="primary left"  @click="dialog = false">
                                  Select metric
                                </v-btn>
                            </v-layout>
                          </v-container>
                        </v-card-actions>

                      </v-card>
                    </v-dialog>
                  </v-layout>
              </v-container>
            </v-card>
        </v-tab-item>
<!-------------------------------------------------END OF FIRST TAB ---------------------------------------------->

<!-------------------------------------------------Second Tab begins---------------------------------------------->
      <v-tab >
        2. Specify metric and condition
      </v-tab>
              <v-tab-item >
                <v-card flat>
                  <v-card-text>  </v-card-text>

                  <!-- Container for headings -->
                    <v-container>
                      <v-card flat class="">
                        <v-layout row wrap>
                          <v-flex xs12 md12>

                          <div class="display-2 pb-2">Specify metric and conditions</div>

                          <div class="display-1 pt-3">Metric</div>
                            <v-flex xs6 md12>
                              <v-card flat>
                                <v-card flat>
                                  <v-btn solo  class="primary right"  >edit</v-btn>
                                </v-card>
                              </v-card>
                            </v-flex>
                          </v-flex>
                        </v-layout >
                      </v-card>
                    </v-container>
                    <v-divider></v-divider>

                    <v-container>
                      <v-card flat class="">
                        <v-layout row>
                          <v-flex xs6 md6>
                            <v-card flat>
                              <div class="display-1 pb-2 grey--text">Graph</div>
                              <p class="grey--text">This alarm will trigger when the blue line goes above the red line</p>
                            </v-card>

                            <v-card flat>
                                <v-flex xs5 md6 >
                                  <div class="title mb-1">4xxErrorRate</div>
                                    <v-layout column my-1>
                                      <div class="subheading pt-3"></div>
                                      <v-img src="https://media.amazonwebservices.com/blog/2014/cloudfront_dist_hourly_4xx_4.png" :aspect-ratio="1" max-width></v-img>
                                    </v-layout>
                                </v-flex>
                            </v-card>
                          </v-flex>

                          <v-divider vertical></v-divider>
                          <v-flex xs6 md6>
                              <v-card flat>
                                <div class="display-1 pl-4 grey--text">Namespace</div>
                                <div class="pl-4">AWS/Cloudfront</div>
                              </v-card>

                              <v-card flat>
                                  <div class="pt-4 pl-4">Metric name</div>
                                  <v-text-field class="pl-4 pr-5 mr-4 pt-2" label="4xxErrorRate" solo block></v-text-field>
                              </v-card>

                              <v-card flat>
                                  <div class="pt-1 pl-4">Region</div>
                                  <v-text-field class="pl-4 pr-5 mr-4" label="Global" solo block></v-text-field>
                              </v-card>

                              <v-card flat>
                                  <div class="pt-1 pl-4">DistributionId</div>
                                  <v-text-field class="pl-4 pr-5 mr-4" label="E2D5UY2120R4CG" solo block></v-text-field>
                              </v-card>

                              <v-card flat>
                                  <div class="pt-1 pl-4">Statistic</div>
                                  <v-text-field class="pl-4 pr-5 mr-4" label="Average" solo block></v-text-field>
                              </v-card>

                              <v-card flat>
                                  <div class="pt-1 pl-4">Period</div>
                                  <v-select :items="time" label="" class="pl-4 pr-5 mr-4 pt-1" solo block></v-select>
                              </v-card>

                          </v-flex>
                        </v-layout>
                      </v-card>
                    </v-container>

                    <v-container>
                      <v-card flat>
                        <v-layout row wrap>
                          <v-flex xs12 md12>
                                <div class="display-1 pl-4 grey--text">Conditions</div>
                                <v-divider></v-divider>
                          </v-flex>

                          <!-- Threshold type -->
                          <v-flex xs12 md12>
                            <v-card flat>
                                <div class="pt-4 pl-4">Threshold type</div>
                                <v-layout row>
                                  <v-flex xs12 md6>
                                    <v-card color="blue-grey lighten-5 mr-5 ml-4 mt-1 pa-auto">
                                      <v-radio-group v-model="ex7" column class="ml-2">
                                        <v-radio label="Static" color="blue" value="radio-1" class="mt-2"></v-radio>
                                        <div class="grey--text ml-4 pa-auto">Use a value as a threshold</div>
                                      </v-radio-group>
                                    </v-card>
                                  </v-flex>

                                  <v-flex xs12 md6>
                                    <v-card color="blue-grey lighten-5">
                                      <v-radio-group v-model="ex7" column class="ml-2 pa-auto">
                                        <v-radio label="Anomaly detection" color="blue" value="" class="mt-2"></v-radio>
                                        <div class="grey--text ml-4 pa-auto">Use a band as a threshold</div>
                                      </v-radio-group>
                                    </v-card>
                                  </v-flex>
                                </v-layout>
                            </v-card>
                          </v-flex>
                                      <!-- Whenever -->
                                          <v-flex xs12 md12>
                                            <v-card flat>
                                                <div class="pt-4 pl-4">Whenever DiskReadBytes is...</div>

                                            <v-layout row>
                                              <v-flex xs12 md3>
                                                <v-card color="blue-grey lighten-5 ml-4 mr-2 pa-auto">
                                                  <v-radio-group v-model="ex7" column class="ml-2">
                                                     <v-radio label="Greater" color="blue" value="" class="mt-2"></v-radio>
                                                     <div class="grey--text ml-4 pb-1"> >threshold</div>
                                                  </v-radio-group>
                                                </v-card>
                                              </v-flex>

                                              <v-flex xs12 md3>
                                                <v-card color="blue-grey lighten-5  ml4 mr-2 pa-auto">
                                                  <v-radio-group v-model="ex7" column class="ml-2">
                                                     <v-radio label="Greater/Equal" color="blue" value="" class="mt-2"></v-radio>
                                                     <div class="grey--text ml-4 pb-1">>=threshold</div>
                                                  </v-radio-group>
                                                </v-card>
                                              </v-flex>

                                              <v-flex xs12 md3>
                                                <v-card color="blue-grey lighten-5 mr-2 pa-auto">
                                                  <v-radio-group v-model="ex7" column class="ml-2">
                                                     <v-radio label="Lower/Equal" color="blue" value="" class="mt-2"></v-radio>
                                                     <div class="grey--text ml-4 pb-1">&#60;=threshold</div>
                                                  </v-radio-group>
                                                </v-card>
                                              </v-flex>

                                              <v-flex xs12 md3>
                                                <v-card color="blue-grey lighten-5 ma-auto pa-auto">
                                                  <v-radio-group v-model="ex7" column class="ml-2">
                                                     <v-radio label="Lower" color="blue" value="" class="mt-2"></v-radio>
                                                     <div class="grey--text ml-4 pb-4"> &#60;threshold </div>
                                                  </v-radio-group>
                                                </v-card>
                                              </v-flex>

                                              </v-layout>
                                            </v-card>
                                          </v-flex>

                                          <!-- than... -->
                                          <v-flex xs12 md6>
                                            <v-card flat class="mb-2 pb-2">
                                              <div class="ml-4 mt-2">than...</div>
                                              <div class="ml-4 mt-2 grey--text">Define the threshold value</div>
                                              <v-text-field class="pl-4 mr-1 pr-5 mr-4 pt-0 mt-0" label="" solo block></v-text-field>
                                              <div class="ml-4 grey--text mb-2">Must be a number</div>
                                            </v-card>
                                          </v-flex>
                        </v-layout>
                      </v-card>
                        <v-divider></v-divider>

                          <v-card flat>
                            <v-layout row>
                              <v-flex xs12 md12>
                                <div class="display-1 pt-3">Additional configuration</div>
                                <div class="mt-2">Datapoints to alarm</div>
                                <div class="mt-2 grey--text">Define the number of datapoints within the evaluation period that must be breaching to cause the alarm to go to ALARM state.</div>

                                <v-layout row>
                                  <v-flex xs12 md1>
                                    <v-text-field class="" label="" solo block></v-text-field>
                                  </v-flex>
                                    <div class="mt-2 grey--text ml-2">out of</div>
                                  <v-flex xs12 md1 class="ml-2">
                                    <v-text-field class="" label="" solo block></v-text-field>
                                  </v-flex>
                                </v-layout>

                                <v-layout row>
                                  <v-flex xs12 md6>
                                      <div class="mt-2">Missing data treatment</div>
                                      <div class="mt-2 grey--text">How to treat missing data when evaluating the alarm</div>
                                      <v-select :items="data" label="" class="" solo block></v-select>
                                  </v-flex>
                                </v-layout>
                              </v-flex>
                            </v-layout>
                          </v-card>
                    </v-container>
                </v-card>
              </v-tab-item>
<!-------------------------------------------Second Tab ENDS --------------------------------------------------------------------------------->

<!----------------------------------------- Third Tab begins---------------------------------------------------------------------------------->
              <v-tab>
                3. Configure actions
              </v-tab>
              <v-tab-item >
                <v-card flat>
                  <v-card-text>  </v-card-text>

                  <!-- Container for headings -->
                    <v-container class="mb-0">
                      <v-card flat class="">
                        <v-layout row wrap>
                          <v-flex xs12 md12>
                            <div class="display-2 pb-2">Configure actions</div>
                            <div class="display-1 pt-3">Notification</div>
                          </v-flex>
                        </v-layout >
                      </v-card>
                    </v-container>

                    <v-divider></v-divider>

                    <v-container class="mt-1 mb-2 pb-2" >
                          <v-card flat>
                            <v-layout row wrap>
                              <!-- Whenever -->
                                <v-flex xs12 md12>
                                  <v-card flat>
                                      <v-card flat>
                                        <v-btn solo  class="primary right" @click="next" >Remove</v-btn>
                                      </v-card>

                                          <div class="pt-4 pl-4">Whenever this alarm state is...</div>
                                          <div class="grey--text pl-4">Define the alarm state that will trigger this action.</div>
                                          <v-layout row>
                                              <v-flex xs12 md4>
                                                <v-card color="blue-grey lighten-5 ml-4 mr-3 pb-0">
                                                  <v-radio-group v-model="ex7" column class="ml-2">
                                                    <v-radio label="in Alarm" color="blue" value="" class="mt-2"></v-radio>
                                                    <div class="grey--text ml-4">The metric or the expression is outside the defined threshold</div>
                                                  </v-radio-group>
                                                </v-card>
                                              </v-flex>

                                              <v-flex xs12 md4>
                                                <v-card color="blue-grey lighten-5  ml4 mr-2 pa-auto">
                                                  <v-radio-group v-model="ex7" column class="ml-2">
                                                    <v-radio label="OK" color="blue" value="" class="mt-2"></v-radio>
                                                    <div class="grey--text ml-4 pb-1">The metric or expression is within the defined threshold</div>
                                                  </v-radio-group>
                                                </v-card>
                                              </v-flex>

                                              <v-flex xs12 md4>
                                                <v-card color="blue-grey lighten-5 mr-2 pa-auto">
                                                  <v-radio-group v-model="ex7" column class="ml-2">
                                                    <v-radio label="INSUFFICIENT_DATA" color="blue" value="" class="mt-2"></v-radio>
                                                    <div class="grey--text ml-4 pb-1">The alarm has just started or not enough data is available</div>
                                                  </v-radio-group>
                                                </v-card>
                                              </v-flex>
                                    </v-layout>
                                  </v-card>
                                </v-flex>

                                                <!-- than... -->
                                                <v-flex xs12 md12>
                                                  <v-card flat class="mb-2 pb-2"  >
                                                    <div class="ml-4 mt-4  ">Select an SNS topic</div>
                                                    <div class="ml-4 grey--text mb-2 ">Define the SNS(Simple Notification Service) topic that will receive the notification</div>

                                                    <v-radio-group v-model="ex7" column class="ml-2 pl-4">
                                                      <v-radio label="Select an existing SNS topic" color="blue" value="" class=""></v-radio>
                                                      <v-radio label="Create new topic" color="blue" value="" class="mt-2"></v-radio>
                                                      <v-radio label="Use topic ARN" color="blue" value="" class="mt-2"></v-radio>
                                                    </v-radio-group>

                                                    <div class="ml-4 ">Send notification to...</div>
                                                    <v-flex xs12 md5>
                                                      <div class="ml-4 mt-2"><v-text-field solo  v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field></div>
                                                      <div class="ml-4 grey--text ">Only email lists for this account are available </div>

                                                      <div class=" ml-3 mt-2 mb-5 pb-2">
                                                        <v-btn depressed solo  class="normal left" >Add notification</v-btn>
                                                      </div>
                                                    </v-flex>
                                                  </v-card>
                                                </v-flex>
                                      </v-layout>
                                    </v-card>

                              <v-card flat>
                                <v-layout row>
                                  <v-flex xs12 md12>
                                    <div class="display-1 pt-1 ml-4">Auto scaling action</div>
                                    <v-card class="mt-2">
                                      <v-flex xs12 md6>
                                        <div class="mt-2 ml-3"><v-btn depressed solo class="normal left" >Add auto scaling action</v-btn></div>
                                      </v-flex>
                                    </v-card>
                                  </v-flex>
                                </v-layout>
                              </v-card>

                              <v-card flat>
                                <v-layout row>
                                  <v-flex xs12 md12>
                                      <div class="display-1 ml-4 mt-5 pt-1 ml-2">EC2 action</div>
                                  </v-flex>
                                </v-layout>
                              </v-card>

                              <!-- Whenever -->
                                      <v-flex xs12 md12>
                                        <v-card flat>
                                            <v-card flat>
                                              <v-btn class="right" solo color="normal" @click="next" >Remove</v-btn>
                                            </v-card>

                                            <div class="pt-4 pl-4">Whenever this alarm state is...</div>
                                            <div class="grey--text pl-4">Define the alarm state that will trigger this action.</div>

                                        <v-layout row>
                                          <v-flex xs12 md4>
                                            <v-card color="blue-grey lighten-5 ml-4 mr-3 pb-0">
                                              <v-radio-group v-model="ex7" column class="ml-2">
                                                <v-radio label="in Alarm" color="blue" value="" class="mt-2"></v-radio>
                                                <div class="grey--text ml-4">The metric or the expression is outside the defined threshold</div>
                                              </v-radio-group>
                                            </v-card>
                                          </v-flex>

                                          <v-flex xs12 md4>
                                            <v-card color="blue-grey lighten-5  ml4 mr-2 pa-auto">
                                              <v-radio-group v-model="ex7" column class="ml-2">
                                                <v-radio label="OK" color="blue" value="" class="mt-2"></v-radio>
                                                <div class="grey--text ml-4 pb-1">The metric or expression is within the defined threshold</div>
                                              </v-radio-group>
                                            </v-card>
                                          </v-flex>

                                          <v-flex xs12 md4>
                                              <v-card color="blue-grey lighten-5 mr-2 pa-auto">
                                                <v-radio-group v-model="ex7" column class="ml-2">
                                                  <v-radio label="INSUFFICIENT_DATA" color="blue" value="" class="mt-2"></v-radio>
                                                  <div class="grey--text ml-4 pb-1">The alarm has just started or not enough data is available</div>
                                                </v-radio-group>
                                              </v-card>
                                          </v-flex>
                                        </v-layout>
                                      </v-card>
                                    </v-flex>

                                  <div class="ml-4 mt-3 pb-1">Take the following action...</div>

                                  <v-radio-group v-model="column" class="ml-5" column>
                                      <v-radio label="Recover this instance" value="radio-1"></v-radio>
                                      <v-radio label="Stop this instance" value="radio-2"></v-radio>
                                      <v-radio label="Terminate this instance" value="radio-2"></v-radio>
                                      <v-radio class="" label="Reboot this instance" value="radio-2"></v-radio>
                                  </v-radio-group>

                                  <v-card flat>
                                    <v-flex xs12 md12>
                                        <v-btn class="ml-5 solo left" color="normal">Add EC2 action</v-btn>
                                    </v-flex>
                                  </v-card>
                        </v-container>
                    </v-card>
              </v-tab-item>

<!----------------------------------------------Third Tab ENDS --------------------------------------------------------------------------------------->
    
<!--------------------------------------------- Fourth Tab Begins------------------------------------------------------------------------------------->
            <v-tab >
              4. Add a description
            </v-tab>

            <v-tab-item >
              <v-card flat>
                <v-card-text>  </v-card-text>

                <!-- Container for headings -->
                  <v-container class="mb-0">
                      <v-card flat class="">
                          <v-layout row wrap>
                              <v-flex xs12 md12>
                                <div class="display-2 pb-2">Add a description</div>
                                <v-divider></v-divider>

                                <div class="pt-3">Name and description</div>
                                <div class="pt-3 grey--text">Alarm name</div>
                                  <v-flex xs12 md6>
                                    <v-text-field class="mt-2" placeholder="Alarm name" label="" solo block></v-text-field>
                                  </v-flex>
                                <div class=" pt-1">Alarm description - optional</div>
                                <div class="grey--text">Define a description for this alarm. Optionally you can also use markdown</div>
                                <div class="mt-1">
                                  <v-textarea solo name="input-7-4" label="Alarm description" value=""></v-textarea>
                                  <div class="grey--text">Upto to 1024 characters (0/1024)</div>
                                </div>

                                  <layout row justify-end>
                                    <v-container>
                                        <v-card flat>
                                            <v-flex xs12 md12>
                                              <v-btn class="ml-2 right" color="primary" solo  @click="next">Next</v-btn>
                                            </v-flex>

                                            <v-flex xs12 md12>
                                              <v-btn solo  class="normal right" @click="next">Previous</v-btn>
                                            </v-flex>

                                            <v-flex xs12 md12>
                                              <v-btn solo  class="primary right" @click="next">Cancel</v-btn>
                                            </v-flex>
                                        </v-card>
                                    </v-container>
                                  </layout>
                              </v-flex>
                             <v-divider></v-divider>

                          </v-layout >
                      </v-card>
                  </v-container>
                  <v-divider></v-divider>

              </v-card>
            </v-tab-item>
<!---------------------------------------------------------------Fourth Tab ENDS ------------------------------------------------------------------------------>

<!-------------------------------------------------------------- Fifth Tab BEGINS  ---------------------------------------------------------------------------->
            <v-tab >
              5. Preview and create
            </v-tab>
            <v-tab-item >
                    <v-card flat>
                      <v-card-text></v-card-text>
                      <!-- Container for headings -->
                        <v-container>
                            <v-card flat class="">
                              <v-layout row wrap>
                                <v-flex xs12 md12>
                                    <div class="display-2 pb-2">Preview and create</div>
                                    <div class="display-1 pt-4 ">Step 1: Specify conditions</div>
                                      
                                      <v-flex xs6 md12>
                                        <v-card flat>
                                          <v-card flat>
                                            <v-btn solo  class="success right"  >edit</v-btn>
                                          </v-card>
                                        </v-card>
                                      </v-flex>

                                </v-flex>
                              </v-layout >
                            </v-card>
                        </v-container>
                        <v-divider></v-divider>

                        <v-container>
                          <v-card flat class="">
                            <v-layout row>
                              <v-flex xs6 md6>
                                  <v-card flat>
                                    <div class="display-1 pb-2 grey--text">Graph</div>
                                    <p class="grey--text">This alarm will trigger when the blue line goes above the red line</p>
                                  </v-card>

                                  <v-card flat>
                                      <v-flex xs5 md6 >
                                        <div class="title mb-1">4xxErrorRate</div>
                                          <v-layout column my-1>
                                            <div class="subheading pt-3"></div>
                                            <v-img src="https://media.amazonwebservices.com/blog/2014/cloudfront_dist_hourly_4xx_4.png" :aspect-ratio="1" max-width></v-img>
                                          </v-layout>
                                      </v-flex>
                                  </v-card>
                              </v-flex>

                              <v-divider vertical></v-divider>
                                <v-flex xs6 md6>
                                    <v-card flat>
                                      <div class="display-1 pl-4 grey--text">Namespace</div>
                                      <div class="pl-4">AWS/Cloudfront</div>
                                    </v-card>

                                    <v-card flat>
                                        <div class="pl-4 grey--text pt-4 pl-4">Metric name</div>
                                        <div class="pl-4 pr-5 mr-4  pb-3">4xxErrorRate</div>
                                    </v-card>

                                    <v-card flat>
                                        <div class="pl-4 grey--text pt-1 pl-4">Region</div>
                                        <div class="pl-4 pr-5 mr-4  pb-3" label="Global" outline block>Global</div>
                                    </v-card>

                                    <v-card flat>
                                        <div class="pl-4 grey--text pt-1 pl-4">DistributionId</div>
                                        <div class="pl-4 pr-5 mr-4  pb-3" label="E2D5UY2120R4CG" outline block>E2D5UY2120R4CG</div>
                                    </v-card>

                                    <v-card flat>
                                        <div class="pl-4 grey--text pt-1 pl-4">Instance name</div>
                                        <div class="pl-4 pr-5 mr-4  pb-3" label="" outline block>My Production Workload</div>
                                    </v-card>

                                    <v-card flat>
                                        <div class="pl-4 grey--text pt-1 pl-4">Statistic</div>
                                        <div class="pl-4 pr-5 mr-4  pb-3" label="Average" outline block>Average</div>
                                    </v-card>

                                    <v-card flat>
                                        <div class="pl-4 grey--text pt-2 pl-4">Period</div>
                                        <div class="pl-4 pr-5 mr-4" label="Average" outline block>5 minutes</div>
                                    </v-card>
                                </v-flex>
                              </v-layout>
                            </v-card>
                        </v-container>

                        <v-container>
                          <v-card flat>
                            <v-layout row wrap>
                                <v-flex xs12 md12>
                                      <div class="display-1  grey--text">Conditions</div>
                                      <v-divider></v-divider>
                                </v-flex>

                                <!-- Threshold type -->
                                <v-flex xs12 md12>
                                  <v-card flat>
                                      <div class="grey--text pt-2 ">Threshold type</div>
                                      <div class="pr-5 mr-4" label="Static" solo block>Static</div>
                                  </v-card>
                                </v-flex>

                                            <!-- Whenever -->
                                <v-flex xs12 md12>
                                  <v-card flat>
                                      <div class="grey--text pt-4 ">Whenever <span class="font-weight-bold">DiskReadBytes</span> is...</div>
                                      <div class="pr-5 mr-4" label="Greater" solo block>Greater(>)</div>
                                  </v-card>
                                </v-flex>

                                <!-- than... -->
                                <v-flex xs12 md6>
                                  <v-card flat class="mb-2 pb-2">
                                    <div class=" mt-2">than...</div>
                                  <div class=" mr-1 pr-5 mr-4 pt-0 mt-0" label="" solo block>10000</div>
                                  </v-card>
                                </v-flex>
                            </v-layout>
                          </v-card>

                            <v-divider></v-divider>
                              <v-card flat>
                                  <v-layout row>
                                    <v-flex xs12 md12>
                                        <div class="display-1 pt-3">Additional configuration</div>
                                        <div class="mt-2">Datapoints to alarm</div>
                                        <v-layout row>
                                            <div class="grey--text ">1 out of 1</div>
                                        </v-layout>

                                        <v-layout row>
                                          <v-flex xs12 md6>
                                            <v-card flat>
                                              <div class="mt-3">Missing data treatment</div>
                                              <div class="grey--text mb-3 ">Treat missing data as missing</div>
                                              <v-divider></v-divider>
                                            </v-card>
                                          </v-flex>
                                        </v-layout>
                                     </v-flex>
                                   </v-layout>
                              </v-card>
                        </v-container>

                          <divider></divider>
                        <v-container>
  
                          <v-card flat>                          
                            <v-layout row>
                              <v-flex xs12 md12>
                                <div class="display-2 pt-1 ">Step 2: Configure actions</div>
                                <div class="display-1 mt-2">Actions</div>
                                <v-flex xs6 md12>
                                  <v-card flat>
                                    <v-card flat>
                                      <v-btn solo  class="success right"  >edit</v-btn>
                                    </v-card>
                                  </v-card>
                                </v-flex>
                                <v-divider></v-divider>
                              </v-flex>
                            </v-layout>

                            <v-layout>
                              <v-flex xs12 md12>
                                <div class="pt-3 grey--text">EC2 action</div>
                                <div class="pt-1 grey--text">When in Alarm, reboot this instance</div>
                                <div class="pt-1 pb-4 mb-2 grey--text">(Instance ID: i-0b9f7f134aab3b6a2)</div>
                                <v-divider></v-divider>
                              </v-flex>
                            </v-layout>

                            <v-layout>
                                <v-flex xs12 md12>
                                    <div class="display-2 pt-2 mt-3 ">Step 3: Add a description</div>
                                    <div class="display-1 mt-2">Name and description</div>
                                    <v-flex xs6 md12>
                                      <v-card flat>
                                        <v-card flat>
                                          <v-btn solo  class="success right" >edit</v-btn>
                                        </v-card>
                                      </v-card>
                                    </v-flex>
                                    <v-divider></v-divider>
                                </v-flex>
                            </v-layout>

                            <v-layout>
                              <v-flex xs12 md12>
                                <div class="grey--text">Name</div>
                                <div class="">A1</div>
                              </v-flex>

                              <v-flex xs12 md12>
                                <div class="grey--text">Description</div>
                                <div class="">A</div>
                              </v-flex>
                            </v-layout>

                            <layout row justify-end>
                                <v-container>
                                  <v-card flat>
                                      <v-flex xs12 md12>
                                      <v-btn class="ml-2 right" solo color="primary"  @click="next">Next</v-btn>
                                      </v-flex>

                                      <v-flex xs12 md12>
                                      <v-btn solo class="normal right" @click="prev">Previous</v-btn>
                                      </v-flex>

                                      <v-flex xs12 md12>
                                        <v-btn solo class="primary right" @click="next">Cancel</v-btn>
                                      </v-flex>
                                  </v-card>
                                </v-container>
                            </layout>
                          </v-card>
                        </v-container>
                    </v-card>
            </v-tab-item>
         </v-tabs>
<!--------------------------------------------Fifth Tab ENDS------------------------------------------------------------------------------------------------>
    </v-container>
      <layout row>
        <v-container>
          <v-card flat>
              <v-flex xs12 md12>
              <v-btn solo class="normal left" @click="prev">Previous</v-btn>
              </v-flex>

              <v-flex xs12 md12>
              <v-btn class="ml-2 left" solo color="primary"  @click="next">Next</v-btn>
              </v-flex>
            </v-card>
          </v-container>
      </layout>
  </div>
</template>


<script lang="ts">
import axios from 'axios'
import { Component, Vue, Prop } from 'vue-property-decorator'
import ServiceCard from '@/components/Alarm.vue'

@Component({
  components: { Alarm },
})
export default class Alarm extends Vue {
  
  
     private getMessage(){
          const path='http://127.0.0.1:5000/api/alarms';
          axios.get(path).then((res)=>{
            this.alarms=res.data.alarms;
            console.log(this.alarms);
          }).catch((error)=>{
            console.error(error);
          });
    }
    private created(){
      this.getMessage();
      
    }
    @Prop()
    public alarms=[];
    
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
