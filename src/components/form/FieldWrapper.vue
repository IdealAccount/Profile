<template>
  <div class="builder-input-box">
    <div class="builder-input-box__label">
      <div class="input-box-label">{{label}}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      label: String
    }
  }
</script>

<style scoped>

</style>
