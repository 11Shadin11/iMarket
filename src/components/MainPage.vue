<template lang="pug">
  v-row.cafes__comp
    v-col
      banner
      h1.cafes__list-title.text-h4.py-5 Популярыне категории ⭐
      br
      v-row.cafes__list.mx-2.mb-3
        div( v-for="el in categories" md="4")
          div.iconCategories(style="padding:20px; margin:10px")
            v-icon(color="#2d2d2d") {{el.mdi}}

    v-col
      h1.cafes__list-title.text-h4.py-5 Горячие скидки 🔥
      br
      v-row.cafes__list.mx-2.mb-3
        v-col( v-for="item in product" :key="item.id" md="4")
          v-card(@click="openProductPage(item)")
            v-img(height="250" :src="item.img")
            v-card-title
              span.itemName {{ item.name }}
            v-card-text
              p.itemName {{ item.description }}

            v-card-text
              p(style="text-decoration:line-through") {{ item.discount }}
            v-card-title
              span.itemName(style="color:#fc8507") {{item.price}}

            v-btn( color="primary" elevation="10" block) В корзину
    v-dialog(v-model="dialog" width="500")
      v-card
        v-card-title Privacy Policy

        v-card-text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        v-divider

        v-card-actions
          v-spacer
          v-btn(color="primary" text @click="dialog = false" ) I accept
</template>

<script>
import Banner from './Banner'
import { mapState } from 'vuex'
export default {
  name: 'Cafe',
  
  components:{
    Banner
  },
  
  data: () => ({
    dialog:false
  }),

  computed: {
    ...mapState('market', ['product', 'categories'])

  },

  methods:{
    openProductPage(item){
      item
      this.dialog = true
      // localStorage.setItem('allProducts', JSON.stringify(this.product));
      // localStorage.setItem('selectedProducts', JSON.stringify(item));
      // this.$router.push({path:'/view'})
    }   
  }
}
</script>
<style scoped>
.v-card{
  padding: 20px !important;
  height: 580px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 1s;
}
.v-card:hover{
  transform: scale(1.07);
  box-shadow: 10px 10px 10px #000;
  transition: transform 1s, box-shadow .5s;
}
.itemName{
  word-break: break-word;
}
.iconCategories{
  border-radius: 20px;
  background: #fff;
}
.v-card__subtitle, .v-card__text, .v-card__title {
  padding: 5px !important;
}
</style>