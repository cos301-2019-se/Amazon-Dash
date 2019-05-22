<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-card-title>
            <v-toolbar-title>Create account</v-toolbar-title>
          </v-card-title>
          <v-card-text>
              <v-form>
                  <v-text-field
                       v-model="firstname"
                       label="First name"
                       required
                    ></v-text-field>

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
                    v-model="Cpassword"
                    label="Confirm Password"
                    type="password"
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
