<template>
  <v-app dark>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  middleware: ['loginRequired'],
  data() {
    return {
      //
    }
  },
}
</script>
