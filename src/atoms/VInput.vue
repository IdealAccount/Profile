<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-on="inputListeners"
  >
</template>

<script>
  export default {
    name: 'VInput',
    props: {
      placeholder: String,
      type: {default: () => 'text'},
      value: {},
      checked: {}
    },
    computed: {
      inputListeners() {
        let vm = this;
        return Object.assign({},
          this.$listeners,
          {
            input(event) {
              vm.$emit('input', event.target.value);
            }
          }
        )
      }
    },
  }
</script>

<style scoped>

</style>
