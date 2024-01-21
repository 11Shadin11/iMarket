<template lang="pug">
div
  div
    banner(v-if="!deviceWidth > 1000")
    h2 Популярные категории ⭐

  .categoriesList
    div(v-for="el in categories")
      .icon-categories(@click="showProductWithCategory(el)" :class="{'selected-category' : el.mdi == selectedCategory.mdi}")
        v-icon(color="#2d2d2d") {{ el.mdi }}

  .product
    h1.text-h4.py-5 {{sectionName}}

    .product-list
      ProductCard(v-for="item in productList" :product="item" :key="item.id")
      //- v-col(v-for="item in productList" :key="item.id" md="4")
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
import ProductCard from '@/components/ProductCard.vue';

const category = {
  'mdi-laptop' : 'laptop',
  'mdi-cellphone' : 'cellphone',
  'mdi-television' : 'television',
  'mdi-camera' : 'camera',
  'mdi-headphones' : 'headphones',
  'mdi-printer' : 'printer',
  'mdi-guitar-electric' : 'musical instruments',
  'mdi-boombox' : 'bluetooth speaker',
  'mdi-nintendo-switch' : 'gameConsoles game',
  'mdi-remote' : 'remote',
  'mdi-fan' : 'fan',
  'mdi-server' : 'server',
}

export default {
  name: "MainPage",

  components: {
    Banner,
    BasketButtons,
    ProductCard
  },

  data: () => ({
    selectedCategory: '',
    sectionName: "Горячие скидки 🔥"
  }),

  mounted() {
    window.addEventListener("popstate", function () {
      this.$router.beforeEach((to, from, next) => {
        to.name = this.$router.name;
        from.name = this.$router.name;
        next({ name: this.$router.name });
      });
    });
  },

  computed: {
    ...mapState('market', ['product', 'categories', 'backetProduts', 'deviceWidth']),

    productList() {
      return this.selectedCategory ? this.product.filter(p => p.category == category[this.selectedCategory.mdi]) : this.product
    }
  },

  methods: {
    ...mapMutations('market', ['setProductInBasket', 'setProductInFavorits', 'setSelectedProduct']),

    showProductWithCategory(el) {
      if(this.selectedCategory != el) {
        this.sectionName = category[el.mdi]
        this.selectedCategory = el
      }
      else {
        this.sectionName = "Горячие скидки 🔥"
        this.selectedCategory = ''
      }
    },

    checkProdutInBacket(itemId) {
      if (this.backetProduts.length) {
        const id = this.backetProduts.map((el) => el.id);
        return id.includes(itemId);
      }
      return false;
    },

    openProductPage(item) {
      this.setSelectedProduct(item);
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

.selected-category {
  box-shadow: 0px 0px 10px #000;
}
.product-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>