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
                         label="secret key"
                         required
                      ></v-text-field>

                  <v-btn class="green" type="submit" >Submit</v-btn>

                  <v-subheader  class="pa-0">Already have an account?
                      <router-link to="/login">
                          Sign in
                      </router-link>
                  </v-subheader>
              </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        firstname : '',
        email : '',
        password : '',
        cpassword : '',
        accessKey: '',
        secretKey: '',


      }
    },

  methods: {
      register() {
        const data = {
          email: this.email,
          password: this.password,
          cpassword: this.cpassword,
          accessKey: this.accessKey,
          secretKey: this.secretKey,
        }
        this.$store.dispatch('register', data)
       .then(() => this.$router.push('/'))
      },
    },
  }
</script>
