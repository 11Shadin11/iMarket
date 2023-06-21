<template lang="pug">
  div
    v-app-bar( color="#00001f" app)
      div.font-weight-bold.white--text.d-flex
        v-app-bar-title.d-flex.align-center iMarket
      
      div.headeMenu
        div(style="padding-left:25vw")
          //- div.d1
          //-   input( type="text" placeholder="Искать здесь...")
          //-     button( type="submit")
        
        div( style="padding-left:20px")
          v-btn( color="#e9712b" fab small @click="$router.push({path:'/'})")
            v-icon( color="#fff") mdi-home

        div( style="padding-left:23vw")
          v-btn( color="#e9712b" fab small @click="$router.push({path:'/basket'})")
            v-icon( color="#fff") mdi-basket-fill
                  
        div.px-20
          v-icon( color="#fff") mdi-bell-outline
        
        div.px-20
          v-icon( color="#fff") mdi-heart-outline

        div.imgBox.px-20
          img( src="https://w7.pngwing.com/pngs/75/697/png-transparent-avatars-accounts-man-male-people-person-turtleneck-sunglasses-beard-wavy-hair-male-avatars-free-d-illustration.png")
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    drawer: false,
    group: null
  })
}
</script>
<style scoped>
.headerItem{
  color: white;
  font-weight: bold;
}
form {
  position: relative;
  width: 300px;
  margin: 0 auto;
}
.d1 input {
  width: 100%;
  height: 42px;
  padding-left: 10px;
  border: 2px solid #595959;
  border-radius: 5px;
  outline: none;
  background: #10103a;
  color: #fff;
}
.d1 button {
  position: absolute; 
  top: 0;
  right: 0px;
  width: 40px;
  height: 40px;
  border: none;
  background: #e9712b;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.d1 button:after {
  content: "\f002";
  font-family: FontAwesome;
  font-size: 16px;
  color: #F9F0DA;
}
.px-20{
  padding-left: 60px;
}
.headeMenu{
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  width: 20%;
  height: auto;
  display: block;
  clip-path: circle(25px at center);
}
</style>