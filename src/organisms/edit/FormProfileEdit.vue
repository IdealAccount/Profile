<template>
    <v-form @submit="save">
      <v-container>
        <v-box>
          <text-field label="Имя и Фамилия"
                      placeholder="Введите имя"
          />
          <text-field type="email"
                      label="Email"
                      placeholder="Введите адрес почты"
          />
         <!-- <text-field type="tel"
                      label="phone"
                      placeholder="+7 (123) 456-78-90"
          />-->
        </v-box>

        <v-box>
          <v-select label="Страна"/>
          <v-select label="Город"/>
          <radio-group/>
        </v-box>
      </v-container>
    </v-form>
</template>

<script>
  import RadioGroup from "../../molecules/form/RadioGroup";
  export default {
    name: 'FormProfileEdit',
    components: {
      RadioGroup,
    },
    data() {
      return {
        profile: {
          name: null,
          email: null,
          phone: null,
        }
      }
    },

    methods: {
      save(event) {
        console.log(event);
      }
    }
  }
</script>

<style scoped>

</style>
