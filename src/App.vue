<template lang="pug">
v-app(id="app" )
  Header(@changeTheme="changeTheme()")

  v-main(v-show="!searchBlockFlag")
    v-container( class="pt-5")
      router-view( class="view")
  
  SearchPage(v-show="searchBlockFlag")
  
  Footer
  MobileFooterMenu(v-if="deviceWidth < 1000")
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MobileFooterMenu from './components/MobileFooterMenu.vue';
import SearchPage from './views/SearchPage.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    MobileFooterMenu,
    SearchPage,
  },

  data: () => ({
  }),

  computed: {
    ...mapState('market', ['searchBlockFlag', 'deviceWidth']),
  },

  methods: {
    ...mapMutations('market', ['setDeviceWidth', 'changeTheme'])
  },
  
  created() {
    const onResize = () => this.setDeviceWidth(window.innerWidth)
    onResize()
    window.addEventListener('resize', onResize)
    this.$on('hook:beforeDestroy', () => window.removeEventListener('resize', onResize))
  },

  beforeMount() {
    document.addEventListener("DOMContentLoaded", ()=>{
      if(localStorage.getItem('theme') && localStorage.getItem('theme') == 'dark') {
        document.documentElement.setAttribute("theme", "dark");
      }
      else {
        document.documentElement.setAttribute("theme", "light");
      }
    })
  }
};
</script>

<style>
:root{
  --panel-bg-color: #eeeeee;
  --container-bg-color: #ffffff;
  --text-color: #000000DE;
  --header-color: #00001f;
}
:root[theme='light']{
  --panel-bg-color: #eeeeee;
  --container-bg-color: #ffffff;
  --text-color: #000000DE;
  --header-color: #00001f;
}
:root[theme='dark'] {
  --panel-bg-color: #2f3542;
  --container-bg-color: #57606f;
  --text-color: #ced6e0;
  --header-color: #57606f;
}

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
  transition: background 0.4s linear;
  background: var(--panel-bg-color);
  color: var(--text-color);
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
  backdrop-filter: blur(10px);
}
.welcome-text {
  color: rgb(0, 0, 0);
  position: absolute;
  font-size: 20px;
  font-family: 'Roboto';
}
</style>
