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
</template>

<script>
import Banner from './Banner'
export default {
  name: 'Cafe',
  
  components:{
    Banner
  },
  
  data: () => ({
    product: [
      {
        id: 0,
        name: 'Игровая консоль Nintendo Switch',
        description: '32 ГБ, геймпад - 2 шт, Bluetooth, Wi-Fi, красный-синий',
        img: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/db8892744594e45c04c68ae831d802c9/9a6e64d744c5b9dbabf13fe92b9e8c07aa4dce69649c8379c7520e0a51486811.jpg.webp',
        discount: '28 800 ₽',
        price: '25 699 ₽',
      },
      {
        id: 1,
        name: 'Наушники TWS JBL Tune 225TWS GHOST оранжевый',
        description: '2.0, вкладыши, 20 Гц - 20000 Гц, 32Ω, Bluetooth, 5.0',
        img: 'https://s3.e2e4.ru/imgproxy/1719821',
        discount: '5 999 ₽',
        price: '4 299 ₽',
      },
      {
        id: 2,
        name: 'Смартфон Samsung Galaxy S23 128 ГБ черный',
        description: 'Ядер - 8x(3.2 ГГц), 8 Гб, 2 SIM, Dynamic AMOLED 2X, 4700 мА*ч',
        img: 'https://online-samsung.ru/sites/default/files/styles/product_full/public/2023-04/SM-S911BZKDCAU_1.png.webp?itok=nyHC2u5e',
        discount: ' 84 499 ₽',
        price: '79 999 ₽',
      },
      {
        id: 3,
        name: 'Смартфон Apple iPhone SE 2022 64 ГБ красный',
        description: 'Ядер - 6, 1 SIM, IPS, 1334x750, камера 12 Мп, NFC, 5G, GPS, 2018 мА*ч',
        img: 'https://at-store.ru/uploadedFiles/eshopimages/big/iphone-se-red.jpg',
        discount: ' 41 499 ₽',
        price: '38 499 ₽',
      },
      {
        id: 4,
        name: 'Фитнес-браслет Xiaomi Mi Smart Band 7',
        description: 'Корпус - черный, ремешок - черный, 1.62", для Android 6.0 и выше, iOS 10 и выше',
        img: 'https://cdn.ksyru0-fusion.fds.api.mi-img.com/b2c-mishop-pms-ru/pms_1658472784.68672308.png',
        discount: ' 3 500 ₽',
        price: '2 999 ₽',
      },
      {
        id: 5,
        name: 'Автомобиль Росиийского производства - ВАЗ 2107',
        description: 'Корпус сделан из титанированного вольфрама, колеса литые',
        img: 'https://avatars.mds.yandex.net/get-autoru-vos/2180490/89fae6e4fd126632631aa434053dc5d6/456x342',
        discount: '♾️ ₽',
        price: '♾️ ₽',
      },
      {
        id: 6,
        name: 'USB - фонарик',
        description: 'Фонарик с USB разьемом для зарядки, корпус из прочных материалов',
        img: 'https://i2.stat01.com/2/1113/111120866/afacdb/22-jpg.jpg',
        discount: '600 ₽',
        price: '499 ₽',
      },
      {
        id: 7,
        name: 'Кофта с оленьями',
        description: 'Кофта с оленьями красного цвета, из прочных нитей немецкого производства',
        img: 'https://content.podarki.ru/goods-images/c194d605-aeef-41e1-9c25-99846d3ee356.jpg',
        discount: '1249 ₽',
        price: '800 ₽',
      }
    ],
    categories: [
      {mdi:'mdi-laptop'},
      {mdi:'mdi-cellphone'},
      {mdi:'mdi-television'},
      {mdi:'mdi-camera'},
      {mdi:'mdi-headphones'},
      {mdi:'mdi-printer'},
      {mdi:'mdi-guitar-electric'},
      {mdi:'mdi-boombox'},
      {mdi:'mdi-nintendo-switch'},
      {mdi:'mdi-remote'},
      {mdi:'mdi-fan'},
      {mdi:'mdi-server'},
      {mdi:'mdi-cctv'},
    ]
  }),

  methods:{
    openProductPage(item){
      localStorage.setItem('allProducts', JSON.stringify(this.product));
      localStorage.setItem('selectedProducts', JSON.stringify(item));
      this.$router.push({path:'/view'})
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