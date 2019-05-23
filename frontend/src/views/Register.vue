<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-card-title>
            <v-toolbar-title>Create account</v-toolbar-title>
          </v-card-title>
          <v-card-text>
              <v-form @submit.prevent="register()" v-model="valid">

                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="cpassword"
                    label="Confirm Password"
                    type="password"
                    required
                  ></v-text-field>

                  <v-text-field
                       v-model="accessKey"
                       label="Access Key"
                       required
                    ></v-text-field>

                    <v-text-field
                         v-model="secretKey"
                         label="Secret Key"
                         required
                      ></v-text-field>

                  <v-btn class="green" type="submit">Submit</v-btn>

                  <v-subheader  class="pa-0">Already have an account?
                  <v-btn @click="$router.push('/login')">
                        Login
                    </v-btn>
                  </v-subheader>
              </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import config from '@/config'
@Component
export default class Register extends Vue {
  private passwordShow: boolean = false
  private valid: boolean = false
  private username: string = ''
  private password: string = ''
  private register() {
    const payload = { email: this.username, password: this.password }
  }
}
</script>
