<template>
  <tab-component class="analytics" :data="tabs" path="marketing"/>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          {
            title: 'Блок 1: Персональная группа',
            component: 'MarketingTabBlockOne',
            active: true,
          },
          {
            title: 'Блок 2: Звезды в структуре',
            component: 'MarketingTabBlockTwo',
            active: false,
          },
          {
            title: 'Блок 3: Груповой объем',
            component: 'MarketingTabBlockThree',
            active: false,
          },
          {
            title: 'Калькулятор',
            component: 'MarketingTabBlockFourth',
            active: false,
          },

        ]
      }
    }
  }
</script>

<style scoped>

</style>
