<template lang="pug">
div.paymentsBlock
  span.title(v-if="favoritProducts.length") Избранные товары
  span.title(v-else) Избранных товаров нет. Воспользуйтесь поиском, чтобы найти всё, что нужно.
  div.mainInfo
    div(v-for="(el, index) in favoritProducts")
      .favorit-produt-card
        v-img( width="25%" :src="require(`@/assets/${el.img}`)")
        div
          span {{el.name}}
          span {{productPrice(el)}}
        
        div
          FavoriteButton(:selectedProduct="el")
</template>

<script>
import { mapState } from 'vuex'
import FavoriteButton from '@/components/FavoriteButton.vue';
export default {
  name: "FavoriteProductsPage",

  components: {
    FavoriteButton
  },

  computed: {
    ...mapState('market', ['favoritProducts'])
  },

  methods: {
    productPrice(el) {
      return (el.price.replaceAll(' ', '').replace('₽', '') * el.quantity).toLocaleString('en-US').replace(/,/g, ' ') + ' ₽'
    },
  },

  mounted() {
  }

}
</script>

<style scoped>

</style>