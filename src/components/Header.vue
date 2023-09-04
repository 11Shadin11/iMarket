<template lang="pug">
div
  v-app-bar( color="#00001f" app)
    div.font-weight-bold.white--text.d-flex
      v-app-bar-nav-icon
        v-icon(color="red") mdi-cart-heart
      v-app-bar-title.d-flex.align-center iMarket
    
    div.headeMenu(:class="{'fullWidth': deviceWidth}")
      div(style="padding-left:10vw")
        div.d1
          input( type="text" placeholder="Искать здесь..." @input="searchValue($event.target.value)")
          v-icon( color="#fff") mdi-shopping-search
      
      div( v-if="!deviceWidth")
        v-btn( color="#e9712b" fab small @click="$router.push({path:'/'})")
          v-icon( color="#fff") mdi-store

      div.backet( v-if="!deviceWidth")
        v-btn( color="#e9712b" fab small @click="$router.push({path:'/basket'})")
          v-icon( color="#fff") mdi-basket-fill
        .backetNew(v-if="checkNewProduct" :data-dynamic-text="checkNewProduct")
                
      div.px-20(v-if="!deviceWidth" style="cursor:pointer")
        v-icon( color="#fff") mdi-bell-outline
      
      div.px-20(v-if="!deviceWidth" style="cursor:pointer" @click="$router.push({path:'/favoriteProductsPage'})")
        v-icon( color="#fff") mdi-heart-outline
        .backetNew(v-if="favoritProducts.length" :data-dynamic-text="favoritProducts.length")

      //- div.imgBox.px-20
        img( src="https://w7.pngwing.com/pngs/75/697/png-transparent-avatars-accounts-man-male-people-person-turtleneck-sunglasses-beard-wavy-hair-male-avatars-free-d-illustration.png")
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex'
export default {
  name: 'Header',
  data: () => ({
    drawer: false,
    group: null,
  }),

  computed: {
    ...mapState('market', ['backetProduts', 'product', 'favoritProducts']),
    ...mapGetters('market', ['deviceWidth']),


    checkNewProduct() {
      return this.backetProduts.length
    },

  },

  methods: {
    ...mapMutations('market', ['setSearchBlockFlag', 'setFindedProducts']),

    searchValue(text) {
      text = text.trim().toLowerCase()
      
      if (text.length) {
        this.setSearchBlockFlag(true)
        let findedItems = this.product.filter(el => el.name.toLowerCase().includes(text))
        this.setFindedProducts(findedItems)
      }

      else{
        this.setSearchBlockFlag(false)
      }

    }
  }
}
</script>
<style scoped>
header {
  border-radius: 0 0 30px 30px !important;
  z-index: 101 !important;
}
form {
  position: relative;
  width: 300px;
  margin: 0 auto;
}
.d1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.d1 input {
  width: 100%;
  height: 42px;
  padding-left: 10px;
  border: 2px solid #595959;
  border-radius: 5px;
  outline: none;
  background: #10103a;
  color: #fff;
}
.px-20{
  padding-left: 60px;
}
.headeMenu{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
img{
  width: 20%;
  height: auto;
  display: block;
  clip-path: circle(25px at center);
}
.backetNew::after {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  content: attr(data-dynamic-text);
  font-family: monospace;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background: red;
  top: 40px;
  font-size: 10px;
  font-family: fantasy;
}
.fullWidth {
  width: 70%;
}
</style>