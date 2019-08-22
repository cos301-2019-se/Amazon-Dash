<style lang="scss">
.register-actions {
  display: flex;

  .google-button {
    background-image: url('../assets/icons/google/1x/btn_google_signin_dark_normal_web.png');
    width: 191px;
    height: 46px;
    &:hover {
      background-image: url('../assets/icons/google/1x/btn_google_signin_dark_focus_web.png');
    }
    &:focus {
      background-image: url('../assets/icons/google/1x/btn_google_signin_dark_pressed_web.png');
    }
  }
  .submit-button {
    flex-grow: 1;
  }

  .google-complete-button {
    flex-grow: 1;
  }
}
</style>

<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-form @submit.prevent="register()" v-model="valid" v-if="!googleUser">
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
              <button @click="googleSignUpClick()" class="google-button" type="button"></button>
              <v-btn color="accent" type="submit" class="submit-button">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
        <v-form v-if="googleUser" @submit.prevent="googleRegister()">
          <v-card>
            <v-card-title class="headline">
              Complete Registration
            </v-card-title>
            <v-card-text>
              <div class="google-profile">
                <v-layout row>
                  <v-flex xs2>
                    <v-avatar :size="64">
                      <img :src="googleUser.imageUrl" alt="avatar">
                    </v-avatar>
                  </v-flex>
                  <v-flex xs10>
                    <p class="headline">{{ googleUser.name }}</p>
                    <p>{{ googleUser.email }}</p>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      v-model="accessKey"
                      prepend-icon="vpn_key"
                      label="Access Key"
                      required>
                    </v-text-field>
                    <v-text-field
                      v-model="secretKey"
                      prepend-icon="vpn_key"
                      label="Secret Key"
                      :append-icon="secretKeyShow ? 'visibility_off' : 'visibility'"
                      @click:append="secretKeyShow = !secretKeyShow"
                      :type="secretKeyShow ? 'text' : 'password'"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
              </div>
            </v-card-text>
            <v-card-actions class="register-actions">
              <v-btn flat @click="googleSignout()" type="button" class="google-complete-button">
                Cancel
              </v-btn>
              <v-btn color="accent" type="submit" class="google-complete-button">
                Register
              </v-btn>
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

interface GoogleUser {
  imageUrl: string
  name: string
  userId: string
  email: string
  accessToken: string
}

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
  private googleUser: GoogleUser | null = null
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

  private googleSignUpClick() {
    this.$gAuth.signIn()
      .then((user: any) => {
        this.setGoogleUser(user)
      }).catch((err: { error: string }) => {
        if (err.error !== 'popup_closed_by_user') {
          this.$store.dispatch('makeErrorMessage', { message: err.error })
        }
      })
  }

  private setGoogleUser(user: any) {
    const profileInfo: any = user.getBasicProfile()
    this.googleUser = {
      userId: user.getId(),
      email: profileInfo.getEmail(),
      name: profileInfo.getName(),
      accessToken: user.getAuthResponse().access_token,
      imageUrl: profileInfo.getImageUrl(),
    }
  }

  private googleRegister() {
    if (this.googleUser) {
      const details = {
        email: this.googleUser.email,
        userId: this.googleUser.userId,
        accessToken: this.googleUser.accessToken,
        accessKey: this.accessKey,
        secretKey: this.secretKey,
      }
      this.$store.dispatch('googleRegister', details)
    }
  }

  private googleSignout() {
    this.googleUser = null
    this.$gAuth.signOut().then(() => {
      this.$router.push('/login')
    }).catch(() => {
      this.$router.push('/login')
    })
  }
}
</script>
