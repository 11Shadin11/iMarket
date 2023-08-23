<template lang="pug">
div
  div(v-if="!searchBlockFlag")
    div
      banner
      h1 Популярные категории ⭐
      
    div.categoriesList
      div( v-for="el in categories" md="4")
        div.icon-categories
          v-icon(color="#2d2d2d") {{el.mdi}}

    div
      h1.text-h4.py-5 Горячие скидки 🔥
      v-row.mx-2.mb-3
        v-col( v-for="item in product" :key="item.id" md="4")
          v-card.product-card(@click="openProductPage(item)")
            v-img.product-card-image(:src="item.img")
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
  div(v-else)
    div(v-if="findedProducts.length")
      span Мы нашли {{findedProducts.length}} товара по вашем запросу.
      v-row.mx-2.mb-3
        v-col( v-for="item in findedProducts" :key="item.id" md="4")
          v-card.product-card(@click="openProductPage(item)")
            v-img.product-card-image(:src="item.img")
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
    div(v-else)
      span По вашему запросу товаров сейчас нет.
</template>

<script>
import Banner from './Banner'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Cafe',
  
  components:{
    Banner
  },
  
  data: () => ({
  }),

  computed: {
    ...mapState('market', ['product', 'categories', 'backetProduts', 'searchBlockFlag', 'findedProducts'])
  },

  methods:{
    ...mapMutations('market', ['setProductInBasket']),

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
    }
  }
}
</script>
<style scoped>
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
.v-card:hover{
  box-shadow: 0 0 10px #000;
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
}
.backet-button-block {
  width: 100%;
}
.backet-button {
  width: inherit;
}
.product-card {
  display: flex;
  flex-direction: column;
}
.product-card-image {
  transform: scale(0.8);
}
</style>