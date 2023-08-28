<template lang="pug">
div.deviceView
  v-row
    v-col
      v-breadcrumbs( :items="breadcrumbs" large)

  v-row
    v-col( md="5")
      v-card( style="padding:20px")
        v-img.d-flex.align-end( :src="require(`@/assets/${selectedProduct.img}`)")

    v-col( md="7")
      v-card.h-100
        v-card-text
          h4.text-h5.mb-4(style="color:#000") {{selectedProduct.name}}
        v-divider
        v-card-text
          h5.mt-4.text-body-2.mr-5 {{selectedProduct.description}}
        v-card-actions
          BasketButtons(:selectedProduct="selectedProduct")
</template>

<script>
import { mapState } from 'vuex';
import BasketButtons from '@/components/BasketButtons.vue';
// import Comment from '../components/Comment.vue';

export default {
  name: 'DeviceView',
  components: {
    BasketButtons
    // Comment,
  },
  data: () => ({
  }),

  computed:{
    ...mapState('market', ['selectedProduct']),

    breadcrumbs() {
      let pages = [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: this.selectedProduct.name,
          disabled: true,
          href: '/view'
        }
      ]
      return pages
    } 
  },

  beforeMount(){
    // if(!this.selectedProduct) {
    //   this.$router.push({path:'/'})
    // }
  },

  mounted(){
    document.querySelector('.deviceView').scrollTop = 0
  }
}
</script>

<style>
.h-100 {
  height: 100%;
}
</style>
