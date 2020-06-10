<template>
  <div id="app">
    <router-view></router-view>
<!--    <main-template></main-template>-->
  </div>
</template>
<script>
  // import MainTemplate from "./views/MainTemplate";
  import {mapGetters} from 'vuex'
  export default {
    // components: {
    //   MainTemplate
    // }
    created() {
      this.loadingPage()
    },
    methods: {
      loadingPage() {
        if (!this.$store.getters.userAuthorized) {
          this.$router.push({name: 'login'})
        } else {
          this.$router.push({name: 'profile'})
        }
      }
    }
  }


</script>

<style lang="scss">
  @import './assets/style/main.scss';
</style>
