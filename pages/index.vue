<template>
  <h1 class="red">Hello World</h1>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: ['loginRequired'],
  head() {
    // Set Meta Tags for this Page
  },
}
</script>
