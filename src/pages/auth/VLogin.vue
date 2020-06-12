<template>
  <div class="v-login">
    <v-form @submit.prevent="login">
      <text-field label="Логин"
                  placeholder="Введите ваше имя"
                  v-model="user.login"
      />
      <text-field label="Пароль"
                  type="password"
                  placeholder="Введите пароль"
                  v-model="user.password"
      />
      <div class="group-button">
        <button>Войти</button>
<!--        <router-link  :to="{redirect: '/registration'}">Не удается войти</router-link>-->
        <router-link  :to="{name: 'registration'}">перейти к Регистрации</router-link>
      </div>
    </v-form>

  </div>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    data() {
      return {
        user: {
          login: null,
          password: null
        },
        errors: [

        ]
      }
    },
    computed: {
      ...mapGetters(['userExist']),
    },
    methods: {
      ...mapMutations(['AUTHORISATION_USER']),
      login() {
         /* this.axios.post("http://37.143.8.135/api", {
            body: this.user
          })*/
        console.log(this.axios);
        if (this.userExist(this.user)) {
          this.$router.push({name: 'profile'})
          this.AUTHORISATION_USER()
        } else {
          alert('не верные данные')
        }

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
