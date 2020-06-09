<template>
  <div class="radio-checker-box">
    <ul class="list">
      <li v-for="(radio, index) of controls" :key="index">
        <radio-control :options="radio"
                       v-model="radioModel"
        />
      </li>
    </ul>
  </div>
</template>

<script>
  import RadioControl from "../components/form/RadioControl";
  export default {
    name: 'ControlsContainer',
    components: {
      RadioControl
    },
    data() {
      return {
        controls: [
          {
            label: 'Мужской',
            value: 'male'
          },
          {
            label: 'Женский',
            value: 'female'
          }
        ],
        radioModel: []
      }
    },
    watch: {
      radioModel(val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped>

</style>
