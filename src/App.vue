<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
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
