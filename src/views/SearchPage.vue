<template lang="pug">
.search-list
  //- .searched-product-length(v-show=" searchBlockFlag && findedProducts.length ") Мы нашли {{findedProducts.length}} товар(а) по вашем запросу.
  //- .searched-product-length(v-show=" searchBlockFlag && !findedProducts.length ") По вашему запросу товаров сейчас нет.
  
  
  div( v-for="item in findedProducts" :key="item.id")
    ProductCard(:product="item" @openProductPage="openProductPage")
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
    ...mapState('market', ['searchBlockFlag', 'findedProducts'])
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
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>