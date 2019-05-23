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

                 <v-text-field class="password"
                   label="Password"
                   :type="cPasswordShow ? 'text' : 'password'"
                   prepend-icon="lock"
                   :append-icon="cPasswordShow ? 'visibility_off' : 'visibility'"
                   @click:append="cPasswordShow = !cPasswordShow"
                   required
                   v-model="password"
                   :rules="[(v => !!v || 'Password is required')]"
                ></v-text-field>

                  <v-text-field
                       v-model="accessKey"
                       prepend-icon="vpn_key"
                       label="Access Key"
                       required
                    ></v-text-field>

                    <v-text-field
                         v-model="secretKey"
                         prepend-icon="vpn_key"
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
  private cPasswordShow: boolean = false
  private valid: boolean = false
  private username: string = ''
  private password: string = ''
  private secretKey: string = ''
  private accessKey: string = ''
  private register() {
    const payload = { email: this.username, password: this.password,
    secret_key: this.secretKey, access_key: this.accessKey}
    fetch(config.apiUrl + '/register', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(() => this.$router.push('/'))
  }
}
</script>
