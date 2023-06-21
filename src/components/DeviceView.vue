<template lang="pug">
  div
    v-row
      v-col
        v-breadcrumbs( :items="breadcrumbs" large)

    v-row
      v-col( md="5")
        v-card( style="padding:20px")
          v-img.d-flex.align-end( height="350" :src="selectedProduct.img")

      v-col( md="7")
        v-card.h-100

          v-card-text
            h4.text-h5.mb-4(style="color:#000") {{selectedProduct.name}}
            v-divider
            <!-- <p class="mt-4 text-body-2 mr-5">{{selectedProduct.description}}</p> -->
            p.mt-4.text-body-2.mr-5 Игровая приставка Nintendo Switch – компактное устройство, которое можно повсеместно брать с собой. Это портативное суперустройство оснащено также 2 геймпадами. При подключении к телевизору модель способна поддерживать разрешение уровнем до Full HD. Встроенная память модели в 32 ГБ сочетается с графическим ядром модели NVIDIA Tegra X1, процессором ARM Cortex A57 и оперативной памятью в 4 ГБ. Гибридный корпус Nintendo Switch имеет внешний блок питания. Разрешение его LCD-экрана диагональю 6.2 дюйма составляет 1280x720. Вес консоли – чуть меньше 300 г.</p>

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
    console.log(this.selectedProduct);
  }
}
</script>

<style>
.h-100 {
  height: 100%;
}
</style>
