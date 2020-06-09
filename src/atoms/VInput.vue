<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="value"
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
    methods: {
      onUpdate(event) {
        console.log(event);
      },
      onChange(event) {
        console.log(event);
      }
    }
  }
</script>

<style scoped>

</style>
