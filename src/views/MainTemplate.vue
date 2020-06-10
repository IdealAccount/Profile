<template>
  <div class="page-wrapper">
    <VNavigation/>
    <div class="profile-tabs-block-go-out">
      <button type="button" class="third-btn" @click.prevent="logout">
        <svg class="svg-icon icon-log-out-yellow">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-log-out-yellow">
            <svg id="icon-log-out-yellow" viewBox="0 0 24 24">
              <path
                d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H15C15.5304 22 16.0391 21.7893 16.4142 21.4142C16.7893 21.0391 17 20.5304 17 20V19C17 18.7348 16.8946 18.4804 16.7071 18.2929C16.5196 18.1054 16.2652 18 16 18C15.7348 18 15.4804 18.1054 15.2929 18.2929C15.1054 18.4804 15 18.7348 15 19V20H6V4H15V5C15 5.26522 15.1054 5.51957 15.2929 5.70711C15.4804 5.89464 15.7348 6 16 6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5V4C17 3.46957 16.7893 2.96086 16.4142 2.58579C16.0391 2.21071 15.5304 2 15 2Z"
                fill="#FAAC15"></path>
              <path
                d="M18.205 16.295C17.815 16.685 17.185 16.685 16.795 16.295C16.6081 16.1079 16.503 15.8542 16.5028 15.5897C16.5026 15.3252 16.6073 15.0714 16.794 14.884L18.67 13H10C9.73478 13 9.48043 12.8946 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12C9 11.7348 9.10536 11.4804 9.29289 11.2929C9.48043 11.1054 9.73478 11 10 11H18.67L16.794 9.116C16.6222 8.92591 16.53 8.67708 16.5365 8.42093C16.5429 8.16479 16.6476 7.92092 16.8287 7.73974C17.0099 7.55857 17.2538 7.45393 17.5099 7.44746C17.7661 7.441 18.0149 7.5332 18.205 7.705L21.793 11.293C21.9805 11.4805 22.0858 11.7348 22.0858 12C22.0858 12.2652 21.9805 12.5195 21.793 12.707L18.205 16.295Z"
                fill="#FAAC15"></path>
            </svg>
          </use>
        </svg>
        Выйти
      </button>
    </div>
    <main>
      <transition name="change-page" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </main>
  </div>
</template>

<script>
  import VNavigation from "../templates/navigation/VNavigation";

  export default {
    name: 'MainTemplate',
    components: {
      VNavigation
    },
    methods: {
      logout() {
        this.$store.commit('logout')
        this.$router.replace({name: 'login'})
      }
    }

  }
</script>

<style lang="scss" scoped>
  .profile-tabs-block-go-out {
    position: fixed;
    right: 10%;
    top: 20px;
  }
</style>
