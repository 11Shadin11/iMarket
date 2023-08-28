<template lang="pug">
.nav-bar-btn-container
  .image
    v-icon( v-if="!checkRouterName(routeName)" color="#e9712b") {{ img }}
    v-icon( v-else color="#e9712b") {{ img.replace('-outline', '') }}
  .footer-text
    .text-11.footer-text-fonts {{title}}
</template>
  
  <script> 
  export default ({
    name:"FooterMenuButton",
    props: {
      img:null,
      title: null,
      // activeImage: null,
      routeName: null,
    },
    
    methods: {
      checkRouterName(name) {
        return this.$route.name == name
      },
    }
  })
  </script>
  
  <style scoped>
  .nav-bar-btn-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .image {
    width: 24px;
    height: 24px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
  .footer-text {
    height: auto;
    width: 100%;
    text-align: center;
  }
  .footer-text-fonts {
    height: 12px;
    color: rgba(114, 114, 114, 1);
  }
  .footer-text-color-white{
    color: #FFFFFF;
  }
  .footer-text-color-black{
    color: #1A1C34;
  }
  .footer-text-color-blue{
    color: #3374C8;
  }
  </style>