<template lang="pug">
div
  v-row
    v-col
      v-breadcrumbs( :items="breadcrumbs" large)
  panel  
    .leftBlock
      .deliveryBlock
        span.title Ближайшая доставка
        .mainInfo
          div
            v-img(width="80%" src="https://static-maps.yandex.ru/1.x/?ll=37.585871,55.903882&size=650,280&z=15&l=map&pt=37.585871,55.903882,pm2rdm")
          br
          .deliveryInfo
            .deliveryTime.pb-10
              span.head Время доставки:
              span.content Послезавтра, 12:00 - 17:00
            
            .deliveryAdress.pb-10
              span.head Адрес доставки:
              span.content УР, г. Ижевск, ул. Горького,  д. 255, кв. 123
            
            .deliveryClient.pb-10
              span.head Получатель:
            
              .client
                v-btn(color="warning" fab dark)
                  v-icon mdi-account-circle
                span(style="padding-left:10px") Иванов Иван  

    .rightblock(v-if="backetProduts.length")
      .paymentsBlock
        span.title Покупки
        .mainInfo
          .backet-produt-card(v-for="(el, index) in backetProduts")
            .product-img
              img( :src="require(`@/assets/${el.img}`)")
            div
              span {{el.name}}
              span {{productPrice(el)}}
            
            div( @click="removeQuantity(el)")
              v-btn(fab x-small)
                v-icon mdi-minus

            div
              span.head.px-4 {{el.quantity}}
            
            div
              v-btn(fab x-small @click="addQuantity(el)")
                v-icon mdi-plus
            
            div
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
          v-btn.white--text(color="green" blcok @click="show=true" :disabled="backetProduts.length == 0" style="width:100%") Перейти к оформлению
    
    div.empty(v-else)
      div Корзина пуста
      div Воспользуйтесь поиском, чтобы найти всё, что нужно.
</template>

<script>
import Panel from '@/components/Panel.vue'
import { mapMutations, mapState } from 'vuex'
import FavoriteButton from '../components/FavoriteButton.vue'

export default {
  name:"Basket",

  components: {
    FavoriteButton,
    Panel
  },

  data: () => ({
    show: false
  }),

  computed: {
    ...mapState('market', ['backetProduts', 'favoritProducts']),

    breadcrumbs() {
      return [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'Корзина',
          disabled: true,
          href: 'basket'
        }
      ]
      // return pages
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
  opacity: .8;
}
.content{
  font-family: revert;
}
.client{
  padding: 20px 0;
}
.leftBlock{
  width: 50%;
}
.checkitem{
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}
.rightblock{
  padding-left:20px ;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  width: 50%;
}
.empty {
  width: 50%;
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
  border-bottom: 0.1px solid #434343;
  padding: 10px 0;
  margin: 10px 0;
}
.product-img {
  display: flex;
  justify-content: center;
  transition: .8s ease-in-out;
}
.product-img:hover {
  transform: scale(2);
}
.product-img img {
  display: block;
  max-height: 100px;
  max-width: 200px;
}
</style>