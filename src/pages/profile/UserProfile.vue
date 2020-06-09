<template>
  <main>
    <div class="profile-box">
      <div class="profile-box__wrapper">
        <div class="profile-box__header">
          <div class="profile-box__header-title">Мой Профиль</div>
          <div class="profile-box__header-user">
            <div class="profile-box__header-user-photo"><img src="../../assets/img/users-photo.png" alt=""></div>
            <div class="profile-box__header-user-data">
              <div class="profile-box__header-user-name-info-wrapper">
                <div class="profile-box__header-user-name">Roman Budzak</div>
                <div class="profile-box__header-user-info">
                  <div class="profile-box__header-user-info-item mr12">
                    <svg class="svg-icon qualification">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#qualification"></use>
                    </svg>STAR
                  </div>
                  <div class="profile-box__header-user-info-item">ID: 777-000992</div>
                </div>
              </div>
              <div class="profile-box__header-user-info">
                <div class="profile-box__header-user-info-item">
                  <router-link :to="{name: 'profile.edit'}" class="third-btn">
                    <svg class="svg-icon icon-edit">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-edit"></use>
                    </svg>Edit Profile
                  </router-link>
                </div>
                <div class="profile-box__header-user-info-item">
                  <button type="button" class="third-btn">
                    <svg class="svg-icon icon-link">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-link"></use>
                    </svg>Link Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <v-tab></v-tab>
      </div>
    </div>
  </main>
</template>

<script>
  import VTab from "../../organisms/tabs/VTab";
  export default {
    name: 'UserProfile',
    components: {
      VTab
    }
  }
</script>

<style scoped>

</style>
