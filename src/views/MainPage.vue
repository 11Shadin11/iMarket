<template lang="pug">
div
  div
    div(v-show="!searchBlockFlag")
      banner
      h1 Популярные категории ⭐
      
    div.categoriesList(v-show="!searchBlockFlag")
      div( v-for="el in categories" md="4")
        div.icon-categories
          v-icon(color="#2d2d2d") {{el.mdi}}

    div
      h1.text-h4.py-5(v-show="!searchBlockFlag") Горячие скидки 🔥
      .searched-product-length(v-show="searchBlockFlag") Мы нашли {{returnProduct.length}} товар(а) по вашем запросу.
      v-row.mx-2.mb-3(:class="{'search-block' : searchBlockFlag }")
        v-col( v-for="item in returnProduct" :key="item.id" md="4")
          v-card.product-card(@click="openProductPage(item)")
            v-img.product-card-image(:src="require(`@/assets/${item.img}`)")
            div
              span.item-name {{ item.name }}
            div
              p.item-name {{ item.description }}

            v-card-text
              p(style="text-decoration:line-through") {{ item.discount }}
            v-card-title
              span.item-name(style="color:#fc8507") {{item.price}}
            div.backet-button-block
              div
                v-btn.backet-button( v-if="!checkProdutInBacket(item.id)" color="primary" elevation="10" @click.stop="addToBacket(item)") Добавить в корзину
                v-btn.backet-button( v-else color="primary" elevation="10" @click.stop="goToBacket") В корзине
                  v-icon mdi-basket-check
              
              v-btn.backet-button(color="green") Купить
              
              FavoriteButton(:selectedProduct="item")
  //- div(v-else)
    .search-block(v-if="findedProducts.length")
      span Мы нашли {{findedProducts.length}} товар(а) по вашем запросу.
      v-row.mx-2.mb-3(style="display: flex; justify-content: center;")
        v-col( v-for="item in findedProducts" :key="item.id" md="4")
          v-card.product-card(@click="openProductPage(item)")
            v-img.product-card-image(:src="require(`@/assets/${item.img}`)")
            div
              span.item-name {{ item.name }}
            div
              p.item-name {{ item.description }}

            v-card-text
              p(style="text-decoration:line-through") {{ item.discount }}
            v-card-title
              span.item-name(style="color:#fc8507") {{item.price}}
            div.backet-button-block
              v-btn.backet-button( v-if="!checkProdutInBacket(item.id)" color="primary" elevation="10" @click.stop="addToBacket(item)") Добавить в корзину
              v-btn.backet-button( v-else color="red" elevation="10" @click.stop="goToBacket") В корзине
                v-icon mdi-basket-check
    .search-block(v-else)
      span По вашему запросу товаров сейчас нет.
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Banner from '../components/Banner.vue'
import FavoriteButton from '../components/FavoriteButton.vue'

// import products from "@/store/products.json"

export default {
  name: 'MainPage',
  
  components:{
    Banner,
    FavoriteButton
  },
  
  data: () => ({
  }),

  mounted() {
    // console.log(products);
  },

  computed: {
    ...mapState('market', ['product', 'categories', 'backetProduts', 'searchBlockFlag', 'findedProducts']),

    returnProduct() {
      if(this.searchBlockFlag) return this.findedProducts
      return this.product
    }
  },

  methods:{
    ...mapMutations('market', ['setProductInBasket', 'setProductInFavorits']),

    checkProdutInBacket(itemId) {
      if(this.backetProduts.length) {
        const id = this.backetProduts.map(el => el.id)
        return id.includes(itemId)
      }
      return false
    },

    openProductPage(item){
      localStorage.setItem('selectedProducts', JSON.stringify(item));
      this.$router.push({path:'/view'})
    },

    addToBacket(item) {
      this.setProductInBasket(item)
    },

    goToBacket() {
      this.$router.push({path:'/basket'})
    },

    addToFavorites(el) {
      this.setProductInFavorits(el)
    }
  }
}
</script>
<style scoped>
@media (hover:hover) {
  .v-card:hover{
    box-shadow: 0 0 10px #000;
  }
}
.v-card{
  padding: 20px !important;
  height: 100%;
  cursor: pointer;
  transform: scale(1);
  transition: transform 1s;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  transition: box-shadow .5s;
}
.item-name{
  word-break: break-word;
}
.icon-categories{
  padding:20px; 
  margin:10px; 
  width:60px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow .5s ;
}
.icon-categories:hover {
  box-shadow: 0px 0px 10px #000;
}
.v-card__subtitle, .v-card__text, .v-card__title {
  padding: 5px !important;
}
.categoriesList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
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
.product-card {
  display: flex;
  flex-direction: column;
}
.product-card-image {
  width: 60%;
  height: auto;
}
.searched-product-length {
  padding: 20px 0;
  font-size: 20px;
}
</style>