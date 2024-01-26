<template lang="pug">
.product-item(@click="openProductPage(product)")
  .product-img
    img( :src="require(`@/assets/${product.img}`)")
  .product-list
    .product-info
      .product-name
        .h4-b {{ product.name }}
        .text-13 {{ product.description }}
      .stars
        v-icon(v-for="i in 5" :key="i" color="rgb(255,215,0)") {{ i <= 4 ? 'mdi-star' : 'mdi-star-outline'}}
      .product-price
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

@media (hover: hover) {
  .product-item:hover {
    box-shadow: 0 0 10px #000;
  }
}

.product-item {
  border-radius: 10px;
  width: 300px;
  margin: 20px;
  padding: 10px 10px 5px 10px;
  border: 1px solid #eee;
  background: var(--container-bg-color);
  overflow: hidden;
  transition: 0.4s linear;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.5s;
}
.product-img {
  display: flex;
  justify-content: center;
  max-height: 150px;
  max-width: 300px;
  transition: 1s ease-in-out;
}
.product-img:hover {
  transform: scale(1.1);
}
.product-img img {
  display: block;
  max-height: 150px;
  max-width: 300px;
}
.product-list {
  height: 60%;
  margin-top: 15px;
}
.product-info {
  height: 60%;
}
.product-price {
  display: flex;
  align-items: center;
}
.price {
  color: #e34d38;
  display: block;
}
.stars {
  display: flex;
  height: 14px;
  line-height: 14px;
  margin: 20px 0;
}
.actions {
  height: 20%;
  padding-top: 10px;
  /* border-top: 1px solid #eee; */
}

</style>