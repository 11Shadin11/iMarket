<template lang="pug">
.bac-grey
  slot
</template>

<script>
export default {};
</script>

<style scoped>
.bac-grey {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background: #b3b3b3;
  padding: 30px;
  border-radius: 10px;
}
</style>