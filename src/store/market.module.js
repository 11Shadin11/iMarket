
export default {
  namespaced: true,

  state : {
    
    product: [
      
      {
        id: 0,
        name: 'Игровая консоль Nintendo Switch',
        description: '32 ГБ, геймпад - 2 шт, Bluetooth, Wi-Fi, красный-синий',
        img: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/db8892744594e45c04c68ae831d802c9/9a6e64d744c5b9dbabf13fe92b9e8c07aa4dce69649c8379c7520e0a51486811.jpg.webp',
        discount: '28 800 ₽',
        price: '25 699 ₽',
        quantity: 1
      },

      {
        id: 1,
        name: 'Наушники TWS JBL Tune 225TWS GHOST оранжевый',
        description: '2.0, вкладыши, 20 Гц - 20000 Гц, 32Ω, Bluetooth, 5.0',
        img: 'https://s3.e2e4.ru/imgproxy/1719821',
        discount: '5 999 ₽',
        price: '4 299 ₽',
        quantity: 1
      },

      {
        id: 2,
        name: 'Смартфон Samsung Galaxy S23 128 ГБ черный',
        description: 'Ядер - 8x(3.2 ГГц), 8 Гб, 2 SIM, Dynamic AMOLED 2X, 4700 мА*ч',
        img: 'https://online-samsung.ru/sites/default/files/styles/product_full/public/2023-04/SM-S911BZKDCAU_1.png.webp?itok=nyHC2u5e',
        discount: ' 84 499 ₽',
        price: '79 999 ₽',
        quantity: 1
      },

      {
        id: 3,
        name: 'Смартфон Apple iPhone SE 2022 64 ГБ красный',
        description: 'Ядер - 6, 1 SIM, IPS, 1334x750, камера 12 Мп, NFC, 5G, GPS, 2018 мА*ч',
        img: 'https://at-store.ru/uploadedFiles/eshopimages/big/iphone-se-red.jpg',
        discount: ' 41 499 ₽',
        price: '38 499 ₽',
        quantity: 1
      },

      {
        id: 4,
        name: 'Фитнес-браслет Xiaomi Mi Smart Band 7',
        description: 'Корпус - черный, ремешок - черный, 1.62", для Android 6.0 и выше, iOS 10 и выше',
        img: 'https://cdn.ksyru0-fusion.fds.api.mi-img.com/b2c-mishop-pms-ru/pms_1658472784.68672308.png',
        discount: ' 3 500 ₽',
        price: '2 999 ₽',
        quantity: 1
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
    ],

    backetProduts: [],

    searchBlockFlag: false,

    findedProducts: null
  },

  getters: {},

  mutations:{
    setProductInBasket(state, product) {
      state.backetProduts.push(product)
    },

    addProductQuantity(state, el) {
      state.backetProduts.map(item => {
        if(item.id == el.id && item.quantity >= 1) item.quantity ++
      })
    },

    turnDownProductQuantity(state, el) {
      state.backetProduts.map(item => {
        if(item.id == el.id && item.quantity >= 1 && el.quantity >= 1) item.quantity --
      })
    },
    
    setSearchBlockFlag(state, flag) {
      state.searchBlockFlag = flag
    },

    setFindedProducts(state, findedProdutsList) {
      state.findedProducts = findedProdutsList
    }
  }

}
  