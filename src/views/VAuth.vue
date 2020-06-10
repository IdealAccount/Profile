<template>
  <div class="wrapper">
    <div class="v-auth">
      <v-form @submit.prevent="authorization">
        <router-view></router-view>
      </v-form>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      authorization() {

      }
    }
  }
</script>

<style lang="scss">
  .wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .v-auth {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,.22);
  }
  .group-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      background: rgba(#ffc107,.8);
      padding: 10px 25px;
    }
    a {
      margin-top: 10px;
      color: #333;
      font-size: 12px;
    }
  }

</style>
