<style lang="scss">
.register-actions {
  display: flex;

  > * {
    flex-grow: 1;
  }
}
</style>

<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-form @submit.prevent="register()" v-model="valid">
          <v-card>
            <v-card-title>
              <v-toolbar-title>Create account</v-toolbar-title>
            </v-card-title>
            <v-card-text>

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
                     label="Confirm Password"
                     :type="cPasswordShow ? 'text' : 'password'"
                     prepend-icon="lock"
                     :append-icon="cPasswordShow ? 'visibility_off' : 'visibility'"
                     @click:append="cPasswordShow = !cPasswordShow"
                     required
                     v-model="cPassword"
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
                           :append-icon="secretKeyShow ? 'visibility_off' : 'visibility'"
                           @click:append="secretKeyShow = !secretKeyShow"
                           :type="secretKeyShow ? 'text' : 'password'"
                           required
                        ></v-text-field>
            </v-card-text>
            <v-card-actions class="register-actions">
              <v-btn flat @click="$router.push('/login')" class="login-button">
                Back To Login
              </v-btn>
              <v-btn color="accent" type="submit">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
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
  private cPassword: string = ''
  private secretKey: string = ''
  private secretKeyShow = false
  private accessKey: string = ''
  private register() {
    if (this.password === this.cPassword) {
      const payload = {
        email: this.username,
        password: this.password,
        secret_key: this.secretKey,
        access_key: this.accessKey,
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>
