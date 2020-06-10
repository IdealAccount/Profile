<template>
  <page-wrapper title="Документы" custom-class="profile-documents">
    <div class="cabinet-course-box__body">
      <div class="cabinet-course-box__main-info">
        <div class="cabinet-course-box__main-info-nav">
          <link-list :data="links"/>
        </div>
      </div>
    </div>
  </page-wrapper>

</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            title: 'Агентская программа',
            src: 'profile',
          },
          {
            title: 'Договор оферты (агентский)',
            src: 'profile',
          },
          {
            title: 'Публичная оферта на оказание инфор&shyмационно-консультацион&shyных услуг',
            src: 'profile',
          },
        ]
      }
    },
    methods: {
      open(src) {
        window.open(`${src}`)
      }
    }

  }
</script>

<style scoped>

</style>
