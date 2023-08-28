<template lang="pug">
div.backet-button-block
  div
    v-btn.backet-button( v-if="!checkProdutInBacket(selectedProduct.id)" color="primary" elevation="10" @click.stop="addToBacket(selectedProduct)") Добавить в корзину
    v-btn.backet-button( v-else color="primary" elevation="10" @click.stop="goToBacket") В корзине
      v-icon mdi-basket-check
  
  v-btn.backet-button(color="green") Купить
  
  FavoriteButton(:selectedProduct="selectedProduct")
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import FavoriteButton from './FavoriteButton.vue'
export default {
  name: "BasketButtons",

  components: {
    FavoriteButton
  },

  props: {
    selectedProduct: null
  },

  computed: {
    ...mapState('market', ['backetProduts']),
  },
  
  methods: {
    ...mapMutations('market', ['setProductInBasket']),

    checkProdutInBacket(itemId) {
      if(this.backetProduts.length) {
        const id = this.backetProduts.map(el => el.id)
        return id.includes(itemId)
      }
      return false
    },

    addToBacket(item) {
      this.setProductInBasket(item)
    },

    goToBacket() {
      this.$router.push({path:'/basket'})
    },

  }

}
</script>

<style scoped>
.backet-button-block {
  flex-wrap: wrap;
  gap: 10px;
  display: flex;
  margin-top: 20px;
  justify-content: center;
}

.backet-button {
  margin: 0 10px;
}

</style>