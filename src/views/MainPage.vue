<template lang="pug">
div
  div
    banner(v-if="!deviceWidth > 1000")
    h2 Популярные категории ⭐

  .categoriesList
    .icon-categories( v-for="el in categories" @click="showProductWithCategory(el)" :class="{'selected-category' : el.mdi == selectedCategory.mdi}")
      v-icon(:color="theme == 'dark' ? '#ffffff' : '#000000' ") {{ el.mdi }}

  .product
    h1.text-h4.py-5 {{sectionName}}

    .product-list
      ProductCard(v-for="item in productList" :product="item" :key="item.id" @openProductPage="openProductPage(item)")
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
    ...mapState('market', ['product', 'categories', 'backetProduts', 'deviceWidth', 'theme']),

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

.item-name {
  word-break: break-word;
}

.icon-categories {
  padding: 20px;
  margin: 10px;
  width: 60px;
  border-radius: 20px;
  background: var(--container-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.5s;
}

.icon-categories:hover {
  box-shadow: 0px 0px 10px #000;
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
  justify-content: center;
  flex-wrap: wrap;
}
</style>