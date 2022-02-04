<template>
  <v-app light>
    <!-- <top-menu /> -->
    <v-main
      :class="[
        setBackground
          ? 'background-handler'
          : !isMiniVariant && ($vuetify.breakpoint.lg || $vuetify.breakpoint.xl)
          ? navWidth
          : '',
      ]"
    >
      <v-container fill-height container--fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
// import TopMenu from '~/components/TopMenu'
export default {
  name: 'UnauthorizedLayout',
  components: {
    // TopMenu,
  },
  data() {
    return {
      isMiniVariant: false,
      navWidth: 'pl-0',
    }
  },
  computed: {
    currentPage() {
      return this.$route.path
    },
    setBackground() {
      const pathUrl = this.$route.path
      return !!(
        pathUrl.includes('login') ||
        pathUrl.includes('forgot-password') ||
        pathUrl.includes('customer-selection')
      )
    },
  },
}
</script>
<style scoped>
.background-handler {
  background: url(/background-login.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
</style>
