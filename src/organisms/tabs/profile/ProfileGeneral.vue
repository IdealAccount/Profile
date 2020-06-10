<template>
  <tab-wrapper>
    <div class="profile-tabs-block-registration-wrapper">
      <div class="profile-tabs-block-content">
        <div class="profile-tabs-block-content-part">Кол-во менеджеров<br><span>4058</span></div>
        <div class="profile-tabs-block-content-part">ГО Персональный <br><span class="yellow-span">1705</span></div>
      </div>
      <div class="profile-tabs-block-content-registration">Регистрация / Активация
        <div class="profile-tabs-block-content-registration-part">
          <div class="profile-tabs-block-content-registration-part-item">Дата регистрации<br><span>19.08.2019</span></div>
          <div class="profile-tabs-block-content-registration-part-item">Зарегистрировал (-а)
            <div class="profile-tabs-block-content-registration-user">
              <div class="profile-tabs-block-content-registration-user-photo"><img
                src="../../../assets/img/users-photo.png" alt=""></div>Роман Будзак
            </div>
          </div>
        </div>
        <div class="profile-tabs-block-content-registration-part">
          <div class="profile-tabs-block-content-registration-part-item">Дата активации<br><span>03.02.2020 05:54:35</span></div>
          <div class="profile-tabs-block-content-registration-part-item">Истекает<br><span>02.06.2020 02:54:34</span></div>
        </div>
      </div>
    </div>
    <div class="profile-tabs-block-plan-wrapper">
      <router-link  :to="{name: 'marketing'}"
                    type="button"
                    class="btn"
                    tag="button"
        >Маркетинг план
      </router-link>
      <div class="cabinet-course-box__main-info-nav">
        <link-list :data="linkList"/>
      </div>
    </div>
  </tab-wrapper>
</template>

<script>
  export default {
    data() {
      return {
        linkList: [
          {
            title: "Документы",
            src: 'documents',
          },
          {
            title: 'Стандарты и процедуры',
            src: 'standards'
          }
        ]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
