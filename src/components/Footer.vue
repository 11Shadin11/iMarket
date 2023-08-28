<template lang="pug">
div
  v-footer(color="#00001f" :class="{'mb-54': deviceWidth}")
    v-col.font-weight-bold.text-center.white--text All rights reserved.
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Footer',

  computed: {
    ...mapGetters('market', ['deviceWidth'])

  }
}
</script>
<style>
.mb-54 {
  margin-bottom: 54px 
}
</style>