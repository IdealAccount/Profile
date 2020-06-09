<template>
  <div class="page-wrapper">
    <VNavigation/>
    <transition name="change-page" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import VNavigation from "../templates/navigation/VNavigation";

  export default {
    name: 'MainTemplate',
    components: {
      VNavigation
    },

  }
</script>

<style lang="scss">

</style>
