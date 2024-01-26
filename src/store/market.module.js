import products from "./products.json"
export default {
  namespaced: true,

  state : {
    
    theme: localStorage.getItem('theme') || 'light',

    product: products.produts,

    categories: products.categories,

    selectedProduct: null,

    backetProduts: [],

    searchBlockFlag: false,

    findedProducts: null,

    deviceWidth: 0,

    favoritProducts: []
  },

  mutations:{

    setDeviceWidth(state, width) {
      state.deviceWidth = width
    },

    setSelectedProduct(state, selectedProduct) {
      state.selectedProduct = selectedProduct
    },
    
    setProductInBasket(state, product) {
      state.backetProduts.push(product)
    },

    addProductQuantity(state, el) {
      let elIdx = state.backetProduts.findIndex(e => el.id === e.id)
      state.backetProduts.splice(elIdx, 1, { ...state.backetProduts[elIdx], quantity: state.backetProduts[elIdx].quantity + 1 })
    },

    turnDownProductQuantity(state, el) {
      let elIdx = state.backetProduts.findIndex(e => el.id === e.id && e.quantity > 1)
      if(elIdx != -1) {
        state.backetProduts.splice(elIdx, 1, { ...state.backetProduts[elIdx], quantity: state.backetProduts[elIdx].quantity - 1 })
      }
    },
    
    setSearchBlockFlag(state, flag) {
      state.searchBlockFlag = flag
    },

    setFindedProducts(state, findedProdutsList) {
      state.findedProducts = findedProdutsList
    },

    setProductInFavorits(state, product) {
      let elIdx = state.favoritProducts.findIndex(e => product.id === e.id)
      if(elIdx == -1) state.favoritProducts.push(product)
      else state.favoritProducts.splice(elIdx, 1);
    },

    remove(state, el) {
      let elIdx = state.backetProduts.findIndex(e => el.id === e.id)
      state.backetProduts.splice(elIdx, 1)
    },

    changeTheme(state) {
      if(document.documentElement.attributes.theme.value == "light") {
        localStorage.setItem('theme', 'dark')
        document.documentElement.setAttribute("theme", "dark");
        state.theme = 'dark'
      }
      else {
        localStorage.setItem('theme', 'light')
        document.documentElement.setAttribute("theme", "light");
        state.theme = 'light'
      }
    }
  }

}