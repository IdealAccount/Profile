<template>
  <div id="app">
    <v-svg></v-svg>
    <router-view/>
  </div>
</template>
<script>
  import VSvg from '@/molecules/svg/VSvg'
  export default {
    name: 'App',
    components: {
      VSvg
    },
    created() {
      this.loading()
    },
    methods: {
      loading() {
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
