<template lang="pug">
.search-list
  .searched-product-length.h4 {{findedProductInfo}}
  //- .searched-product-length(v-if="searchBlockFlag && findedProducts && findedProducts.length ") Мы нашли {{findedProducts.length}} товар(а) по вашем запросу.
  //- .searched-product-length(v-if="searchBlockFlag && !findedProducts.length ") По вашему запросу товаров сейчас нет.
  
  .fined-product
    ProductCard( v-for="item in findedProducts" :key="item.id" :product="item" @openProductPage="openProductPage")
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import BasketButtons from '@/components/BasketButtons.vue'
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: "SearchPage",

  components: {
    BasketButtons,
    ProductCard
  },

  computed: {
    ...mapState('market', ['searchBlockFlag', 'findedProducts']),

    findedProductInfo() {
      console.log(this.findedProducts);
      return this.findedProducts?.length ? `Мы нашли ${this.findedProducts.length} товар(а) по вашем запросу.` : 'По вашему запросу товаров сейчас нет.'
    }
  },

  methods: {
    ...mapMutations('market', ['setSelectedProduct', 'setSearchBlockFlag']),

    openProductPage(item){
      if(this.$route.name != 'DeviceView') {
        this.setSelectedProduct(item)
        this.$router.push({path:'/view'})
        this.setSearchBlockFlag(false)
      }
      else {
        this.setSelectedProduct(item)
        this.setSearchBlockFlag(false)
      }
    },
  }

}
</script>

<style scoped>
.search-list {
  margin: 100px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* font-size: 25px; */
}
.fined-product {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.searched-product-length {
  text-align: center;
}
</style>