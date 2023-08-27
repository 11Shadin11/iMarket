<template lang="pug">
div
  v-row
    v-col
      v-breadcrumbs( :items="breadcrumbs" large)
  div.bac-grey
    v-col( md="5")
      div.leftBlock
        div.deliveryBlock
          span.title Ближайшая доставка
          div.mainInfo
            div
              v-img(width="80%" src="https://static-maps.yandex.ru/1.x/?ll=37.585871,55.903882&size=650,280&z=15&l=map&pt=37.585871,55.903882,pm2rdm")
            br
            div.deliveryInfo
              div.deliveryTime.pb-10
                span.head Время доставки:
                span.content Послезавтра, 12:00 - 17:00
              
              div.deliveryAdress.pb-10
                span.head Адрес доставки:
                span.content УР, г. Ижевск, ул. Горького,  д. 255, кв. 123
              
              div.deliveryClient.pb-10
                span.head Получатель:
              
                div.client
                  v-btn(color="warning" fab dark)
                    v-icon mdi-account-circle
                  span(style="padding-left:10px") Иванов Иван  
    v-col()
      div.rightblock(v-if="backetProduts.length")
        div.paymentsBlock
          span.title Покупки
          div.mainInfo
            div(v-for="(el, index) in backetProduts")
              .backet-produt-card
                v-col(md="10")
                  v-img( width="25%" :src="require(`@/assets/${el.img}`)")
                v-col(md="5" style="margin-left: -20vw; display: flex; flex-direction: column")
                  span {{el.name}}
                  span {{productPrice(el)}}
                
                v-col( @click="removeQuantity(el)")
                  v-btn(fab plain x-small)
                    v-icon mdi-minus

                v-col
                  span.head {{el.quantity}}
                
                v-col
                  v-btn(fab plain x-small @click="addQuantity(el)")
                    v-icon mdi-plus
                
                v-col(md="2")
                  FavoriteButton(:selectedProduct="el")
                  
                  v-btn(plain @click="deleteProduct(el)")
                    v-icon mdi-delete

        div.check
          div.checkitem
            span.head Кол-во товаров
            span.head(style="margin-left: -25vw;") {{backetProduts.length}}

          div.checkitem
            span.head Сумма заказа
            span.head {{productsSumm}} ₽
          
          div.checkitem
            span.head Стоимость доставки
            span.head Бесплатно

          div.checkitem
            span.content ИТОГО
            span.content {{productsSumm}} ₽

          div.checkitem
            v-btn.white--text(color="green" blcok @click="" :disabled="backetProduts.length == 0" style="width:100%") Перейти к оформлению
      div.empty(v-else)
        div Корзина пуста
        div Воспользуйтесь поиском, чтобы найти всё, что нужно.
</template>

<script>

import { mapMutations, mapState } from 'vuex'
import FavoriteButton from './FavoriteButton.vue'

export default {
  name:"Basket",

  components: {
    FavoriteButton
  },

  data: () => ({
  }),

  computed: {
    ...mapState('market', ['backetProduts', 'favoritProducts']),

    breadcrumbs() {
      let pages = [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'Корзина',
          disabled: true,
          href: '/basket'
        }
      ]
      return pages
    },

    productsSumm() {
      let summ = 0
      if(!this.backetProduts) {
        return 0
      }
      this.backetProduts.map(el => {
        summ += Number(el.price.replaceAll(' ', '').replace('₽', '') * el.quantity)
      })
      return summ.toLocaleString('en-US').replace(/,/g, ' ') + ' ₽'
    }
  },

  methods: {
    ...mapMutations('market', ['addProductQuantity', 'turnDownProductQuantity', 'setProductInFavorits', 'remove']),
    
    

    addQuantity(el) {
      this.addProductQuantity(el)
    },

    removeQuantity(el) {
      this.turnDownProductQuantity(el)
    },

    productPrice(el) {
      return (el.price.replaceAll(' ', '').replace('₽', '') * el.quantity).toLocaleString('en-US').replace(/,/g, ' ') + ' ₽'
    },

    deleteProduct(el) {
      this.remove(el)
    }
  },

}
</script>

<style scoped>
*{
  font-family: revert;
}
.bac-grey{
  display: flex;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px #c4c4c4;
}
.title{
  color:#10103a
}
.mainInfo{
  padding-top:30px ;
}
.deliveryTime{
  display: flex;
  flex-direction: column;
  padding-bottom: 15px !important;
}
.deliveryAdress{
  display: flex;
  flex-direction: column;
  padding-bottom: 15px !important;
}
.deliveryClient{
  display: flex;
  flex-direction: column;
  padding-bottom: 15px !important;
}
.head{
  opacity: .6;
}
.content{
  font-family: revert;
}
.client{
  padding: 20px 0;
}
.leftBlock{
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.checkitem{
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}
.rightblock{
  width: 100%;
  max-width: 35vw;
}
.empty {
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.backet-produt-card {
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  /* border-top: .5px solid #434343; */
  border-bottom: .5px solid #434343;
  padding: 10px 0;
  margin: 10px 0;
}
</style>