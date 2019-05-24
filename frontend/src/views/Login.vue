<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card>
                  <v-layout justify-center row>
                     <v-flex xs4 md2>
                        <v-layout justify-center>
                          <v-card-title primary-title>
                            <div>
                               <h3 class="headline mb-0">Amazon Dash</h3>
                            </div>
                          </v-card-title>
                        </v-layout>
                    </v-flex>
                </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <v-card-text>
                        <v-form @submit.prevent="login()" v-model="valid">

                         <v-text-field class="username"
                           label="Username"
                           prepend-icon="person"
                           required
                           v-model="username"
                           :rules="[(v => !!v || 'Username is required')]"
                         ></v-text-field>
                         <v-text-field class="password"
                           label="Password"
                           :type="passwordShow ? 'text' : 'password'"
                           prepend-icon="lock"
                           :append-icon="passwordShow ? 'visibility_off' : 'visibility'"
                           @click:append="passwordShow = !passwordShow"
                           required
                           v-model="password"
                           :rules="[(v => !!v || 'Password is required')]"
                        ></v-text-field>
                          <v-btn type="submit">Login</v-btn>

                          <v-subheader  class="pa-0">Create a new account?
                            <v-btn @click="$router.push('/register')">
                                  Create account
                              </v-btn>
                          </v-subheader>


                        </v-form>
                    </v-card-text>
                </v-flex>
              </v-layout>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import config from '@/config'
@Component
export default class Login extends Vue {
  private passwordShow: boolean = false
  private valid: boolean = false
  private username: string = ''
  private password: string = ''
  private login() {
    const payload = { email: this.username, password: this.password }
    this.$store.dispatch('login', payload)
  }
}
</script>
