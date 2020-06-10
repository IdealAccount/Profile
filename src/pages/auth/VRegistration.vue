<template>
  <div class="v-registration">
    <v-form @submit.prevent>
     <!-- <text-field label="Ваше имя"
                  placeholder="Введите ваше имя"
                  v-model="user.name"
      />-->
      <text-field label="Ваш логин"
                  placeholder="Придумайте себе логин"
                  v-model="user.login"
      />
     <!-- <text-field label="Номер телефона"
                  type="tel"
                  placeholder="Введите ваш номер"
                  v-model="user.phone"
      />-->
      <text-field label="Пароль"
                  type="password"
                  placeholder="Придумайте пароль"
                  v-model="user.password"
      />
     <!-- <text-field label="Подтвердить пароль"
                  type="password"
                  placeholder="Повторите пароль"
                  v-model="password"
      />-->
      <div class="group-button">
        <button @click.prevent="registration">Зарегистрироваться</button>
        <router-link :to="{name: 'login'}">К Авторизации</router-link>
      </div>
    </v-form>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        user: {
          name: null,
          login: null,
          password: null,
          phone: null
        },
        password: ''
      }
    },
    computed: {
      checkPassword() {
        return this.password === this.user.password
      }
    },
    methods: {
      ...mapMutations(['registrationUser']),
      registration() {
        let id = Date.now();
        // if (!this.checkPassword) return alert('Пароли не совпадают')
        new Promise((resolve, reject) => {
          if (this.user.login && this.user.password) {
            this.user.id = id;
            this.registrationUser(this.user)
            resolve();
          } else reject();
        }).then(() => {
          this.$router.push({name: 'login'})
        }).catch(() => {
          alert('Что то пошло не так')
          this.user = {
            name: null,
            login: null,
            password: null,
            phone: null
          }
        })
        console.log(this.user);
      }
    }
  }
</script>

<style scoped>

</style>
