<template>
  <div>
    <line-chart :apiData="apiData"></line-chart>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        apiData: [],
      }
    },
    async mounted() {
      this.apiData = JSON.parse(`{"gain_loss":{"current_total":8296,"previous_total":11852,"percent":30,"is_gain":false},"current":[{"date":"01.06.2020","total":649},{"date":"02.06.2020","total":607},{"date":"03.06.2020","total":763},{"date":"04.06.2020","total":618},{"date":"05.06.2020","total":545},{"date":"06.06.2020","total":521},{"date":"07.06.2020","total":566},{"date":"08.06.2020","total":602},{"date":"09.06.2020","total":446},{"date":"10.06.2020","total":470},{"date":"11.06.2020","total":388},{"date":"12.06.2020","total":486},{"date":"13.06.2020","total":396},{"date":"14.06.2020","total":490},{"date":"15.06.2020","total":466},{"date":"16.06.2020","total":283}],"previous":[{"date":"01.05.2020","total":695},{"date":"02.05.2020","total":533},{"date":"03.05.2020","total":1003},{"date":"04.05.2020","total":905},{"date":"05.05.2020","total":868},{"date":"06.05.2020","total":850},{"date":"07.05.2020","total":877},{"date":"08.05.2020","total":684},{"date":"09.05.2020","total":510},{"date":"10.05.2020","total":628},{"date":"11.05.2020","total":787},{"date":"12.05.2020","total":652},{"date":"13.05.2020","total":740},{"date":"14.05.2020","total":730},{"date":"15.05.2020","total":735},{"date":"16.05.2020","total":655},{"date":"17.05.2020","total":667},{"date":"18.05.2020","total":615},{"date":"19.05.2020","total":661},{"date":"20.05.2020","total":760},{"date":"21.05.2020","total":767},{"date":"22.05.2020","total":697},{"date":"23.05.2020","total":551},{"date":"24.05.2020","total":678},{"date":"25.05.2020","total":595},{"date":"26.05.2020","total":623},{"date":"27.05.2020","total":640},{"date":"28.05.2020","total":652},{"date":"29.05.2020","total":633},{"date":"30.05.2020","total":601},{"date":"31.05.2020","total":679}]}`)
    }
  }
</script>

<style scoped>

</style>
