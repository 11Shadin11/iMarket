<template lang="pug">
div.footer.footer-background-white
  div.footer-img

    router-link.text-decoration.img(to="/")
      FooterMenuButton(
        :img="'mdi-store-outline'"
        title='Главная'
        routeName="MainPage"
      )
    
        //- :img="'mdi-magnify'"
    //- router-link.text-decoration.img(to="/searchPage")
    //-   FooterMenuButton(
    //-     :img="'mdi-shopping-search-outline'"
    //-     title='Поиск'
    //-     routeName="SearchPage"
    //-   )

    router-link.text-decoration.img(to="/favoriteProductsPage")
      FooterMenuButton(
        :img="'mdi-heart-outline'"
        title='Избранные'
        routeName="FavoriteProductsPage"
      )
      .backetNew(v-if="favoritProducts.length" :data-dynamic-text="favoritProducts.length")

    router-link.text-decoration.img(to="/notificationPage")
      FooterMenuButton(
        :img="'mdi-bell-outline'"
        title='Уведомления'
        routeName="NotificationPage"
      )

    router-link.text-decoration.img(to="/basket")
      FooterMenuButton(
        :img="'mdi-basket-outline'"
        title='Корзина'
        routeName="Basket"
      )
      .backetNew(v-if="backetProduts.length" :data-dynamic-text="backetProduts.length")
</template>

<script>
import { mapState } from 'vuex';
import FooterMenuButton from './FooterMenuButton.vue';
export default {
  name: "MobileFooterMenu",

  components: {
    FooterMenuButton
  },

  computed: {
    ...mapState('market', ['favoritProducts', 'backetProduts'])
  }

}
</script>

<style scoped>

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
  background: rgb(255, 196, 0);
  top: 0;
  right: 55px;
  font-size: 10px;
  font-family: fantasy;
  color: #000
}
.footer {
  position: fixed;
  box-shadow: 0px -0.1px 2px rgba(128, 128, 128, 0.452);
  z-index: 202;
  bottom: 0px;
  width: 100%;
  height: 54px;
}
.footer-background-white{
  border-color: #8A8A8F;
  background: #FBFBFB;
}
.footer-background-transparent{
  background: transparent;
  border-color: transparent;
}
.footer-img {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
}
.img {
  position: relative;
  width: 20%;
  height: 57px;
}
.img-before-auth {
  position: relative;
  width: 25%;
  height: 57px;
}
.image {
  width: 24px;
  height: 24px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
.text-decoration {
  text-decoration: none;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.margin {
  margin-bottom: 27px;
}
</style>