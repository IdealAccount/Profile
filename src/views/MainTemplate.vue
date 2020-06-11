<template>
  <div class="page-wrapper">
    <VNavigation/>
    <main>
      <transition name="change-page" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </main>
  </div>
</template>

<script>
  import VNavigation from "../templates/navigation/VNavigation";

  export default {
    name: 'MainTemplate',
    components: {
      VNavigation
    },
    methods: {
      logout() {
        this.$store.commit('logout')
        this.$router.replace({name: 'login'})
      }
    }

  }
</script>

<style lang="scss" scoped>
  .profile-tabs-block-go-out {
    position: fixed;
    right: 10%;
    top: 20px;
  }
</style>
