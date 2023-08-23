<template lang="pug">
  div.deviceView
    v-row
      v-col
        v-breadcrumbs( :items="breadcrumbs" large)

    v-row
      v-col( md="5")
        v-card( style="padding:20px")
          v-img.d-flex.align-end( :src="selectedProduct.img")

      v-col( md="7")
        v-card.h-100

          v-card-text
            h4.text-h5.mb-4(style="color:#000") {{selectedProduct.name}}
            v-divider
            p.mt-4.text-body-2.mr-5 {{selectedProduct.description}}

    v-row.cafe__menu
      v-col.order-sm-2.order-xl-1(md="6")
        v-card.h-100
          v-card-text
            v-list-item-group
              div.characterics
                h4.text-h5.mb-4( style="color:#000") Характеристики:
              //- v-img( src="../assets/aboutProduct.png")

      v-col.order-sm-1.order-xl-2(md="6")
        v-card
          v-card-text
            v-list-item-group
              div.characterics
                h4.text-h5.mb-4( style="color:#000") Отзывы:
          //- v-img(
          //-   width="80%"
          //-   height="auto"
          //-   src="../assets/video.png"
          //-   class="d-flex align-end"
          //- )
          
    Comment
</template>

<script>
import Comment from './Comment.vue';

export default {
  name: 'CafeView',
  components: {
    Comment,
  },
  data: () => ({
    selectedProduct: null
  }),

  computed:{
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
          href: '/cafe/view'
        }
      ]
      return pages
    } 
  },

  beforeMount(){
    this.selectedProduct = JSON.parse (localStorage.getItem('selectedProducts'))
  },

  mounted(){
    document.querySelector('.deviceView').scrollTop = 0
    console.log(this.selectedProduct);
  }
}
</script>

<style>
.h-100 {
  height: 100%;
}
</style>
