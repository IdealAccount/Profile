<template>
    <div class="radio-box">
      <label>
        <v-input type="radio"
                 :value="options.value"
                 :checked="{}"
                 @change="update"
        />
        <span>{{options.label}}</span>
      </label>
    </div>
</template>

<script>
  export default {
    name: 'RadioControl',
    props: {
      options: Object,
    },
    methods: {
      update() {
        console.log('radio update')
      }
    }
  }
</script>

<style scoped>

</style>
