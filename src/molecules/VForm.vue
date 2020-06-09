<template>
  <form @submit.prevent="formSubmit" class="">
    <slot></slot>
  </form>

</template>

<script>
  export default {
    name: 'VForm',
    methods: {
      formSubmit(event) {
        this.$emit('submit', event);
      }
    }
  }
</script>

<style scoped>

</style>
