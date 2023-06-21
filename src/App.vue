<template lang="pug">
  v-app#app
    Header

    v-main
      v-container( class="pt-5")
        router-view( class="view")

    Footer
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    drawer: false,
    group: ''
  }),
};
</script>
<style scoped>
#app{
  background:#eeeeee
}
</style>
