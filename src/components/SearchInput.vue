<template lang="pug">
.search
  input.search-input.h4#search-input(placeholder="Искать на iMarket" @input="$emit('input', $event.target.value)" @blur="$emit('blur')") 
  .img-search
    img(src="@/assets/search.svg")
</template>

<script>
export default {
  name: "SearchInput"
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 35px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  text-align: start;
  align-items: center;
  padding: 0 0 0 8px;
}
.search-input {
  color: #000000;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: auto;
  width: 100%;
  height: 100%;
  padding: 0px 0px 0px 24px;
  outline: none;
}
.img-search {
  position: relative;
  width: 15px;
  bottom: 25px;
  left: 0px;
}
</style>