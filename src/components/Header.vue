<template lang="pug">
.header
  div.font-weight-bold.white--text.d-flex
    v-icon(color="red") mdi-cart-heart
    .d-flex.align-center.h1 iMarket
  
  div.headeMenu
    .d1
      SearchInput(@input="searchValue" @blur="blur")
    
    div( v-if="!checkDeviceWidth")
      v-btn( color="#e9712b" fab small @click="$router.push({path:'/'})")
        v-icon( color="#fff") mdi-store

    div.backet( v-if="!checkDeviceWidth")
      v-btn( color="#e9712b" fab small @click="$router.push({path:'/basket'})")
        v-icon( color="#fff") mdi-basket-fill
      .backetNew(v-if="checkNewProduct" :data-dynamic-text="checkNewProduct")
              
    div.px-20(v-if="!checkDeviceWidth" style="cursor:pointer")
      v-icon( color="#fff") mdi-bell-outline
    
    div.px-20(v-if="!checkDeviceWidth" style="cursor:pointer" @click="$router.push({path:'/favoriteProductsPage'})")
      v-icon( color="#fff") mdi-heart-outline
      .backetNew(v-if="favoritProducts.length" :data-dynamic-text="favoritProducts.length")
    
    div.px-20(@click="$emit('changeTheme')")
      v-icon( :color="theme == 'light' ? '#ffffff' : '#000000'") mdi-theme-light-dark
    
    //- div.px-20(v-if="!checkDeviceWidth" style="cursor:pointer" @click="")
      img( src="https://w7.pngwing.com/pngs/75/697/png-transparent-avatars-accounts-man-male-people-person-turtleneck-sunglasses-beard-wavy-hair-male-avatars-free-d-illustration.png")
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import SearchInput from './SearchInput.vue'

export default {
  
  name: 'Header',

  components: {
    SearchInput
  },
  
  data: () => ({
    drawer: false,
    group: null,
  }),

  computed: {
    ...mapState('market', ['backetProduts', 'product', 'favoritProducts', 'deviceWidth', 'searchBlockFlag', 'theme']),


    checkNewProduct() {
      return this.backetProduts.length
    },

    checkDeviceWidth () {
      return this.deviceWidth < 1000
    }

  },

  methods: {
    ...mapMutations('market', ['setSearchBlockFlag', 'setFindedProducts']),

    blur() {
      setTimeout(() => {
        this.setSearchBlockFlag(false)
        document.getElementById('search-input').value = ''
      }, 500);
    },

    searchValue(text) {
      text = text.trim().toLowerCase()
      
      if (text.length) {
        this.setSearchBlockFlag(true)
        let findedItems = this.product.filter(el => el.name.toLowerCase().includes(text))
        this.setFindedProducts(findedItems)
      }

      else{
        this.setFindedProducts(null)
        this.setSearchBlockFlag(false)
      }

    }
  }
}
</script>
<style scoped>
.header {
  transition: background 0.4s linear;
  padding: 0 10px;
  height: 60px;
  background: var(--header-color);
  display: flex;
  justify-content: space-between;
  z-index: 101 !important;
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
.pl-10 {
  margin-right: 10px ;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>