<template lang="pug">
.product-item(@click="openProductPage(product)")
  .product-img
    img( :src="require(`@/assets/${product.img}`)")
  .product-list
    .product-info
      .h4-b {{ product.name }}
      .text-13 {{ product.description }}
      .stars
        v-icon mdi-star-outline
      .price.text-13(style="text-decoration:line-through") {{ product.discount }}
      .price {{product.price}}

    .actions
      BasketButtons(:selectedProduct="product")
</template>

<script>
import { mapMutations } from "vuex";
import BasketButtons from "@/components/BasketButtons.vue";

export default {
  name: "ProductCard",

  components: {
    BasketButtons,
  },

  props: {
    product: null,
  },

  methods: {
    ...mapMutations("market", ["setSelectedProduct", "setSearchBlockFlag"]),

    openProductPage(item) {
      this.$emit("openProductPage", item);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.product-item {
  border-radius: 10px;
  width: 350px;
  margin: 20px;
  padding: 10px 10px 5px 10px;
  border: 1px solid #eee;
  background: white;
  overflow: hidden;
  transition: 0.4s linear;
  display: flex;
  flex-direction: column;
}
.product-img {
  display: flex;
  justify-content: center;
  height: 150px;
  transition: 1s ease-in-out;
}
.product-img:hover {
  transform: scale(1.1);
}
.product-img img {
  display: block;
  width: 300px;
  height: auto;
}
.product-list {
  height: 60%;
  margin-top: 15px;
}
.product-info {
  height: 60%;
}
.price {
  color: #e34d38;
  display: block;
  margin-bottom: 12px;
}
.stars {
  height: 14px;
  line-height: 14px;
  margin: 20px 0;
}
/* .stars:after {
  content: "\f04d0\f04ce\f04ce\f04ce\f006";
  color: #efb71c;
  font-size: 14px;
  font-family: FontAwesome;
} */
.actions {
  height: 20%;
  padding-top: 10px;
  border-top: 1px solid #eee;
}
/* .actions:after {
  content: "";
  display: table;
  clear: both;
}
.add-to-cart,
.add-to-links {
  float: left;
}
.cart-button {
  text-decoration: none;
  color: #8c877c;
  padding-right: 20px;
  border-right: 1px solid #ddd;
  transition: 0.4s linear;
}
.cart-button:before {
  content: "\f07a";
  font-family: FontAwesome;
  margin-right: 10px;
}
.add-to-cart:hover .cart-button,
.wishlist:hover,
.compare:hover {
  color: #e34d38;
} */
/* .wishlist,
.compare {
  color: #8c877c;
  padding-left: 20px;
  transition: 0.4s linear;
}
.wishlist:after,
.compare:after {
  display: inline-block;
  font-family: FontAwesome;
  font-size: 13px;
}
.wishlist:after {
  content: "\f004";
}
.compare:after {
  content: "\f079";
} */
</style>