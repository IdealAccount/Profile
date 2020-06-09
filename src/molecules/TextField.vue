<template>
  <field-wrapper :label="label">
    <div class="builder-input-box__input-wrapper">
      <div class="builder-input-box__input">
        <div class="form-group">
          <v-input :placeholder="placeholder"
                   :value="value"
                   :type="type"
          />
        </div>
      </div>
    </div>
  </field-wrapper>
</template>

<script>
  import VInput from "../atoms/VInput";
  import FieldWrapper from "../components/form/FieldWrapper";
  export default {
    name: 'TextField',
    comments: {
      FieldWrapper,
      VInput
    },
    props: {
      label: String,
      type: String,
      placeholder: String,
    },
    data() {
      return {
        value: '',
      }
    },
    methods: {
      onUpdate(event) {
        console.log('update', event.target.value);
      },
      onChange(event) {
        console.log(event);
      }
    }

  }
</script>

<style scoped>

</style>
