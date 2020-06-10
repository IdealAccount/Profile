<template>
  <div class="profile-tabs-block block">
    <div class="profile-tabs-block-conteiner" :class="customClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      customClass: String
    }

  }
</script>

<style scoped>

</style>
