<template>
  <div class="mp-error mx-auto">
    <v-container class="mx-0 my-0" fluid>
      <v-row
        no-gutters
        :class="$vuetify.breakpoint.xs ? 'ma-1 pt-6 white' : 'ma-5 pt-6 white'"
        style="height: 420px"
      >
        <v-col
          cols="12"
          md="6"
          sm="6"
          :class="$vuetify.breakpoint.xs ? 'pa-2' : 'pa-5'"
        >
          <h1
            v-if="error.statusCode === 404"
            class="font-weight-medium float-right pr-5 error-code"
          >
            404
          </h1>
          <h1 v-else class="font-weight-medium float-right pr-5 error-code">
            500
          </h1>
        </v-col>
        <v-col
          cols="12"
          md="5"
          sm="5"
          :class="$vuetify.breakpoint.xs ? 'pa-4' : 'pa-5 pt-12'"
        >
          <h2 v-if="error.statusCode === 404" class="font-weight-medium">
            <v-icon class="fs-36">mdi-alert</v-icon> {{ pageNotFound }}
          </h2>
          <h2 v-else class="font-weight-medium">
            <v-icon class="fs-36">mdi-alert</v-icon> {{ otherError }}
          </h2>
          <p class="pt-1 fs-18">
            We could not find the page you were looking for. In the meantime,
            you can return to the
            <a :href="`projects/?error=${error.statusCode}`">home</a>.
            <br />
            <v-btn
              tile
              color="primary"
              class="my-5 white--text"
              :href="`projects/?error=${error.statusCode}`"
              nuxt
              elevation="0"
            >
              Website
            </v-btn>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'ErrorLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Page not found',
      otherError: 'Error',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
<style scoped>
.error-code {
  color: #ca0000;
  font-size: 96px;
}
.fs-36 {
  font-size: 36px;
}
</style>
