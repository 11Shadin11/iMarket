<template lang="pug">
div
  div
    div
      banner(v-if="!deviceWidth > 1000")
      h2 Популярные категории ⭐

    .categoriesList
      div(v-for="el in categories", md="4")
        .icon-categories
          v-icon(color="#2d2d2d") {{ el.mdi }}

    div
      h1.text-h4.py-5 Горячие скидки 🔥

      v-row.mx-2.mb-3
        v-col(v-for="item in product" :key="item.id" md="4")
          v-card.product-card(@click="openProductPage(item)")
            v-img.product-card-image(:src="require(`@/assets/${item.img}`)")
            div
              span.item-name {{ item.name }}
            div
              p.item-name {{ item.description }}

            v-card-text
              p(style="text-decoration: line-through") {{ item.discount }}
            v-card-title
              span.item-name(style="color: #fc8507") {{ item.price }}

            BasketButtons(:selectedProduct="item")
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Banner from "../components/Banner.vue";
import BasketButtons from "@/components/BasketButtons.vue";

export default {
  name: "MainPage",

  components: {
    Banner,
    BasketButtons,
  },

  data: () => ({}),

  mounted() {
    window.addEventListener("popstate", function () {
      // window.location.replace(this.$route.name)
      this.$router.beforeEach((to, from, next) => {
        to.name = this.$router.name;
        from.name = this.$router.name;
        next({ name: this.$router.name });
      });
    });
  },

  computed: {
    ...mapState("market", ["product", "categories", "backetProduts", "deviceWidth"]),
  },

  methods: {
    ...mapMutations("market", ["setProductInBasket", "setProductInFavorits", "setSelectedProduct"]),

    checkProdutInBacket(itemId) {
      if (this.backetProduts.length) {
        const id = this.backetProduts.map((el) => el.id);
        return id.includes(itemId);
      }
      return false;
    },

    openProductPage(item) {
      this.setSelectedProduct(item);
      // localStorage.setItem('selectedProducts', JSON.stringify(item));
      this.$router.push({ path: "/view" });
    },

    addToFavorites(el) {
      this.setProductInFavorits(el);
    },
  },
};
</script>
<style scoped>
@media (hover: hover) {
  .v-card:hover {
    box-shadow: 0 0 10px #000;
  }
}
.v-card {
  padding: 20px !important;
  height: 100%;
  cursor: pointer;
  transform: scale(1);
  transition: transform 1s;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.5s;
}
.item-name {
  word-break: break-word;
}
.icon-categories {
  padding: 20px;
  margin: 10px;
  width: 60px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.5s;
}
.icon-categories:hover {
  box-shadow: 0px 0px 10px #000;
}
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 5px !important;
}
.categoriesList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.product-card {
  display: flex;
  flex-direction: column;
}
.product-card-image {
  width: 60%;
  height: auto;
}
.searched-product-length {
  padding: 20px 0;
  font-size: 20px;
}
</style>