<template lang="pug">
  div.bac-grey
    v-col( md="6")
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
    v-col( md="7")
      div.rightblock
        div.paymentsBlock
          span.title Покупки
          div.mainInfo
            div(v-for="(el, index) in allProducts")
              div(v-if="index < 3" style="display:flex")
                v-col(md="10")
                  v-img(width="20%" height="auto" :src="el.img")
                v-col(md="5" style="margin-left: -20vw")
                  span {{el.name}}
                v-col(md="2" style="padding-left:10px")
                  span.head 1 шт.
                v-col(md="2" style="padding-left:10px")
                  span {{el.price}}
        
        hr
        br
        
        div.check
          div.checkitem
            span.head Кол-во товаров
            span.head(style="margin-left: -25vw;") 3
          
          br
          
          div.checkitem
            span.head Сумма заказа
            span.head 109 997 ₽
          
          br
          
          div.checkitem
            span.head Стоимость доставки
            span.head Бесплатно
          
          br

          div.checkitem
            span.content ИТОГО
            span.content 109 997 ₽
          
          br

          div.checkitem
            v-btn.white--text(color="green" blcok style="width:100%") Перейти к оформлению
</template>

<script>
export default {
  name:"Basket",
  data: () => ({
    allProducts: null
  }),

  beforeMount(){
    this.allProducts = JSON.parse (localStorage.getItem('allProducts'))
  }

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
  display: flex;
  justify-content: space-between;
}
.rightblock{
  max-width: 35vw;
}
</style>