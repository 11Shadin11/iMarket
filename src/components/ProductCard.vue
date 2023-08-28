<template lang="pug">
.product-card(@click="openProductPage(product)")
  .product-image
    v-img( width="50%" height="auto" :src="require(`@/assets/${product.img}`)")
  .product-info
    span {{ product.name }}
    span {{ product.description }}
    p(style="text-decoration:line-through") {{ product.discount }}
    span(style="color:#fc8507") {{product.price}}
    BasketButtons(:selectedProduct="product")
</template>

<script>
import { mapMutations } from 'vuex'
import BasketButtons from '@/components/BasketButtons.vue'

export default {

  name: 'ProductCard',

  components: {
    BasketButtons
  },

  props: {
    product: null
  },

  methods: {
    ...mapMutations('market', ['setSelectedProduct', 'setSearchBlockFlag']),

    openProductPage(item){
      this.$emit('openProductPage', item)
    },
  }

}
</script>

<style scoped>
* {
 box-sizing: border-box;
}
.product-card {
  width: 300px;
  min-height: 500px;
  max-height: 600px;
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: inset 1px 1px 10px #000; */
  background: #fff;
  overflow: hidden;
  margin: 20px;
  box-shadow: 0px 0px 10px #000;
}
.product-image {
  height: 50%;
}
</style>