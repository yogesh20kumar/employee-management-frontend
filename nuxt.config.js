import colors from 'vuetify/es5/util/colors'
import vueI18n from './plugins/i18n'

export default {
  env: {
    brand: 'IT',
    projectName: 'Employee<sup>TM<sup>',
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'http://localhost:3000'
        : process.env.NODE_ENV === 'test'
        ? 'http://localhost:3000'
        : 'http://localhost:3000',
    authURL:
      process.env.NODE_ENV === 'production'
        ? 'http://localhost:3000'
        : process.env.NODE_ENV === 'test'
        ? 'http://localhost:3000'
        : 'http://localhost:3000',
    apiUrl:
      process.env.NODE_ENV === 'production'
        ? 'http://localhost:5000'
        : process.env.NODE_ENV === 'test'
        ? 'http://localhost:5000'
        : 'http://localhost:5000',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Employee Management',
    title: 'Employee Management',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: 'grey',
    height: '2px',
    duration: 1000,
    continuous: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', 'nuxt-i18n'],

  /*
   ** i18n module configuration
   ** https://github.com/nuxt-community/nuxt-i18n
   */
  i18n: {
    seo: false,
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
    ],
    vueI18n,
    defaultLocale: 'en',
  },

  axios: {
    baseURL: 'http://localhost:5000',
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
          // autoFetch: true,
        },
        endpoints: {
          login: { url: '/api/users/login-user', method: 'post' },
          logout: { url: '/api/users/logout', method: 'post' },
          user: { url: '/api/users/profile', method: 'get' },
        },
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    options: {
      customProperties: true,
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.deepOrange.darken3,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.deepOrange.darken3,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
