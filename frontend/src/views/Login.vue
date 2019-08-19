<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.heading {
  width: 100%;
  text-align: center;
}
.buttons {
  display: flex;
  .register-button {
    flex-grow: 1;
  }
  .login-button {
    flex-grow: 1;
  }
}

.card-text {
  margin-bottom: 2rem;
}
</style>
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-form @submit.prevent="login()" v-model="valid" class="form">
          <v-card>
            <v-card-title primary-title class="heading">
              <h3 class="headline heading">Amazon Dash</h3>
            </v-card-title>
            <v-card-text class="card-text">
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
            </v-card-text>
            <v-card-actions class="buttons">
              <v-btn @click="$router.push('/register')" flat class="register-button">
                Create account
              </v-btn>
              <v-btn type="submit" color="accent" class="login-button">Login</v-btn>
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
