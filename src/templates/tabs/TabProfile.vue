<template>
  <tab-component class="builder-tabs-wrapper" :data="tabs" path="profile"/>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          {
            title: 'General',
            component: 'ProfileGeneral',
            active: true,
          },
          {
            title: 'My Earnings',
            component: 'ProfileEarnings',
            active: false,
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
