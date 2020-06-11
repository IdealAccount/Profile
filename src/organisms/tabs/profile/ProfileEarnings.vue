<template>
  <tab-wrapper custom-class="fdc">
      <v-calendar/>
      <div class="profile-tabs-block-account-plan-wrapper">
        <div class="profile-tabs-block-account-wrapper">
          <div class="profile-tabs-block-account">
            <div class="profile-tabs-block-account-title">Счет к начислению</div>
            <div class="profile-tabs-block-account-content">₽23 987</div>
            <div class="info-box">
              <button type="button">
                <svg class="svg-icon icon-info">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-info"></use>
                </svg>
              </button>
              <div class="info-box__detail">Каждая отдельная выбранная тема должна конкретно и точно описывать содержание вашего курса, не обобщая излишне. Например для курса "Полный курс по теннису" необходимо выбрать тему "Теннис", а не "Подача в теннисе" (конкретная, но не точная) или "Спорт" (точная, но не конкретная).</div>
            </div>
          </div>
          <div class="profile-tabs-block-account">
            <div class="profile-tabs-block-account-title">Счет к выплате</div>
            <div class="profile-tabs-block-account-content">
              <div class="profile-tabs-block-account-content-item">₽15 577</div>
              <div class="profile-tabs-block-account-content-item">Последний платеж:<br>₽13 410</div>
            </div>
            <div class="info-box">
              <button type="button">
                <svg class="svg-icon icon-info">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-info"></use>
                </svg>
              </button>
              <div class="info-box__detail">Каждая отдельная выбранная тема должна конкретно и точно описывать содержание вашего курса, не обобщая излишне. Например для курса "Полный курс по теннису" необходимо выбрать тему "Теннис", а не "Подача в теннисе" (конкретная, но не точная) или "Спорт" (точная, но не конкретная).</div>
            </div>
          </div>
        </div>
        <div class="profile-tabs-block-plan-wrapper">
          <div class="cabinet-course-box__main-info-nav">
            <link-list :data="linkList"/>
          </div>
        </div>
      </div>
  </tab-wrapper>
</template>

<script>
  import VCalendar from "../../../components/VCalendar";

  export default {
    components: {
      VCalendar
    },
    data() {
      return {
        linkList: [
          {
            title: 'Подать заявку на вывод',
            src: 'profile'
          },
          {
            title: 'Сделать перевод',
            src: 'profile'
          },
          {
            title: 'Statement',
            src: 'profile'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
