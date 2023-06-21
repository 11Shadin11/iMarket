<template lang="pug">
  div.banner-container
    div.main-block-deposit
      div.text-part
        span.bannerText(style="color:white; margin-right:10px; font-size:50px") Black Friday
        br
        span.bannerText(style="color:white;") ГЛАВНЫЕ СКИДКИ ГОДА
        br
        span(style="color:white;") Только до 32 мая 2023 года.
        div.close
          img.bannerImage( width="30%" height="auto" src="@/assets/fromBanner.png")
</template>
<script>
export default {
  name: "Banner",
}
</script>

<style scoped>
.main-block-deposit {
  width: 100%;
  height:40vh;
  border-radius: 15px;
  background: linear-gradient(270deg,  #fff700 0%, #ff0000 95.19%);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  margin:28px 10px 28px 0px;
}
.main-block-template {
  width: 100%;
  height: auto;
  min-height:56px;
  border-radius: 15px;
  background: #004790;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
  /* margin:28px 10px 28px 0px; */
}
.main-block-autopays {
  width: 100%;
  height: auto;
  min-height:56px;
  border-radius: 15px;
  background: #9C95DA;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
  /* margin:28px 10px 28px 0px; */
  /* margin: 0 16px; */
}
.banner-container{
  width: 100%;
}
.img {
  width: auto;
  float: left;
  margin-left: 5px;
}
.text-part {
  width: auto;
  position: relative;
  color: #FFFFFF;
  text-align: left;
  padding: 50px 0px 13px 120px;
}
.text-part-template {
  width: auto;
  position: relative;
  color: #FFFFFF;
  text-align: left;
  padding: 8px 40px 8px 16px;
}
.close {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -20px;
  left: 51vw;
}
.bannerText{
  font-family: revert;
  font-size:30px
}
</style>