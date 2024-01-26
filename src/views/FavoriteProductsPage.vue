<template lang="pug">
div
  v-row
    v-col
      v-breadcrumbs( :items="breadcrumbs" large)
  panel
    .title {{ favoritProducts.length ? 'Избранные товары' : 'Избранных товаров нет. Воспользуйтесь поиском, чтобы найти всё, что нужно.'}} 
    .mainInfo
      product-card(v-for="el in favoritProducts" :key="el.name" :product="el")
</template>

<script>
import { mapState } from 'vuex'
import FavoriteButton from '@/components/FavoriteButton.vue';
import ProductCard from '@/components/ProductCard.vue';
import Panel from '@/components/Panel.vue';

export default {
  name: "FavoriteProductsPage",

  components: {
    FavoriteButton,
    ProductCard,
    Panel
  },

  computed: {
    ...mapState('market', ['favoritProducts']),

    breadcrumbs() {
      return [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'Избранное',
          disabled: true,
          href: 'favoriteProductsPage'
        }
      ]
    },
  },

}
</script>

<style scoped>
.mainInfo {
  display: flex;
  flex-wrap: wrap;
}
</style>