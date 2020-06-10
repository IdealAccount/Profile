<template>
  <v-container>
    <v-box>
      <text-input label="Имя и Фамилия"
                  placeholder="Введите имя"
      />
      <text-input type="email"
                  label="Email"
                  placeholder="Введите адрес почты"
      />
      <text-input type="tel"
                  label="phone"
                  placeholder="+7 (123) 456-78-90"
      />
    </v-box>
    <v-box>
      <v-select label="Страна"/>
      <v-select label="Город"/>
      <radio-group/>
    </v-box>
  </v-container>
</template>

<script>
  import RadioGroup from "../../molecules/form/RadioGroup";
  export default {
    name: 'InputsGroup',
    components: {RadioGroup}
  }
</script>

<style scoped>

</style>
