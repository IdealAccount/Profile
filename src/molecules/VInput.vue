<template>
  <div class="builder-input-box">
    <div class="builder-input-box__label">
      <div class="input-box-label">{{title}}</div>
    </div>
    <div class="builder-input-box__input-wrapper">
      <div class="builder-input-box__input">
        <div class="form-group">
          <input
            :type="type"
            :placeholder="placeholder"
            :value="value"
            @input="update"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VInput',
    props: {
      title: String,
      placeholder: String,
      type: {default: () => 'text'},
      value: {},
    },
    methods: {
      update(event) {
        console.log(event);
      }
    }

  }
</script>

<style scoped>

</style>
