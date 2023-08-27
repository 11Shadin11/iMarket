<template lang="pug">
div  
  v-btn(plain v-if="checkFavorite(selectedProduct)" @click.stop="addToFavorites(selectedProduct)")
    v-icon(color="red") mdi-heart
  
  v-btn(plain v-else @click.stop="addToFavorites(selectedProduct)")
    v-icon mdi-heart-outline
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: "FavoriteButton",

  props: {
    selectedProduct: null
  },

  computed: {
    ...mapState('market', ['favoritProducts']),

  },

  methods: {
    ...mapMutations('market', ['setProductInFavorits']),

    checkFavorite(el) {
      if(this.favoritProducts.length) {
        const id = this.favoritProducts.map(el => el.id)
        return id.includes(el.id)
      }
      return false
    },

    addToFavorites(el) {
      this.setProductInFavorits(el)
    },
  }

}
</script>

<style scoped>

</style>