<template lang="pug">
v-app(id="app")
  //- .loading-screen(v-if="timeout")
    v-progress-circular( indeterminate size="200" width="10" color="#00001f")
    //- .welcome-text Welcom to Imarket®
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
    // timeout: true,
  }),

  mounted() {
    // setTimeout(() => {
    //   this.timeout = !this.timeout
    // }, 1500);
  }
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: #f9f9fd;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: linear-gradient(180deg, #00c6fb, #005bea)
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: #f9f9fd;
}
#app{
  background:#eeeeee
}
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}
.loading-screen:before {
  position: absolute;
  content: '';
  height: 100vh;
  width: 100vw;
  background: transparent;
  backdrop-filter: blur(20px);
}
.welcome-text {
  color: rgb(0, 0, 0);
  position: absolute;
  font-size: 20px;
  font-family: 'Roboto';
}
</style>
