<template>
  <div class="al-login">
    <v-container class="fill-height" fluid>
      <v-overlay
        :absolute="absolute"
        :opacity="opacity"
        :value="overlay"
        :z-index="zIndex"
        :dark="dark"
      >
        <v-row align="center" justify="center">
          <v-col style="min-width: 420px">
            <div
              class="white--text text-center pa-10 text-h5"
              style="background: #6f777c"
            >
              <span class="font-weight-blod fs-32">{{ author }}</span>
              <!-- eslint-disable vue/no-v-html -->
              <span
                class="font-weight-book login-project-name fs-32"
                v-html="projectName"
              >
              </span>
              <!--eslint-enable-->
            </div>
            <v-form
              ref="form"
              v-model="valid"
              method="post"
              :class="$vuetify.breakpoint.xs ? 'small-box' : ''"
              @submit.prevent
            >
              <v-card
                outlined
                tile
                :min-width="$vuetify.breakpoint.xs ? '420' : '420'"
                min-height="350"
              >
                <v-card-title>
                  <p
                    class="text-center font-weight-blod fs-20 mt-4 text--secondary"
                    style="width: 100%"
                  >
                    Login in to Panel
                  </p>
                </v-card-title>
                <v-card-text class="py-0 px-8 fixed-alert">
                  <!-- <le34-general-alert
                    v-show="alertCfg.show"
                    :type="alertCfg.type"
                    :message="alertCfg.message"
                    :action-function="alertCfg.actionFunction"
                    :action-text="alertCfg.actionText"
                  /> -->
                  <v-text-field
                    ref="username"
                    v-model="username"
                    placeholder="Enter email"
                    type="text"
                    outlined
                    class="rounded-0 mb-5 border-2 custom-placeholer-color"
                    height="57"
                    :rules="[(v) => !!v || $t('required')]"
                    hide-details
                    autofocus
                    @update:error="(e) => (valid = !e)"
                    @change="() => $refs.form.validate()"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    placeholder="Enter password"
                    type="password"
                    outlined
                    class="rounded-0 mb-1 border-2 custom-placeholer-color"
                    height="57"
                    :rules="[(v) => !!v || $t('required')]"
                    hide-details
                    @update:error="(e) => (valid = !e)"
                    @change="() => $refs.form.validate()"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions class="pa-8 mt-n1">
                  <v-btn
                    :disabled="isSubmitDisabled || !valid"
                    :loading="isSubmitDisabled"
                    type="submit"
                    color="primary"
                    class="white--text font-weight-book"
                    :class="$vuetify.breakpoint.xl ? 'px-12' : 'px-10'"
                    height="44px"
                    width="100%"
                    tile
                    elevation="0"
                    @click="submit"
                  >
                    {{ $t('log_in') }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-col>
        </v-row>
      </v-overlay>
    </v-container>
  </div>
</template>
<script>
// import { mapActions } from 'vuex'
export default {
  name: 'LoginPage',
  layout: 'unauthorized',
  middleware: ['guest'],
  data: () => ({
    author: `${process.env.brand}`,
    projectName: `${process.env.projectName}`,
    absolute: false,
    opacity: 0.45,
    overlay: true,
    zIndex: 1,
    dark: false,
    username: null,
    password: null,
    error: null,
    valid: true,
    message: null,
    alertCfg: {
      show: false,
      type: 'info',
      message: '',
      actionFunction: () => {},
      actionText: '',
    },
    submitDisabled: false,
    customerList: [],
  }),
  head() {
    return {
      title: this.$t('login'),
    }
  },
  computed: {
    isSubmitDisabled() {
      return (
        this.submitDisabled || (this.$nuxt.$loading && this.$nuxt.$loading.show)
      )
    },
  },
  mounted() {
    this.clearStorage()
  },
  methods: {
    // ...mapActions('auth', ['authenticate', 'populateIdentity']),
    async submit() {
      this.submitDisabled = true
      try {
        const { username, password } = this
        const response = await this.$auth.loginWith('local', {
          email: username,
          username: 'YOK1',
          password,
        })
        console.log(response)
        // const result = await this.authenticate({
        //   username,
        //   password,
        // })
        // await this.populateIdentity(result.accessToken)
        this.valid = true
      } catch (err) {
        let errMessage = ''
        switch (err.code) {
          case 401:
            errMessage = this.$t('login401')
            break
          case 403:
            errMessage = this.$t('login403')
            break
          default:
            errMessage = err.message
        }
        this.alertCfg = {
          show: true,
          type: 'error',
          message: errMessage,
          actionFunction: null,
          actionText: '',
        }
        this.submitDisabled = false
      }
    },
    clearStorage() {
      localStorage.clear()
    },
  },
}
</script>
