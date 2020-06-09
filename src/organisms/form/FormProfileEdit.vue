<template>
<!--  <div class="profile-box__all-info-wrapper">
    <div class="profile-box__all-info-header">Общая информация</div>
    <div class="profile-box__all-info-conteiner">
      <div class="profile-box__all-info">
        <div class="profile-box__all-info-content">
          <div class="profile-box__all-info-content-title">Изменить пароль</div>
          <div class="profile-box__all-info-content-text">Для изменения пароля введите текущий пароль и нажмите кнопку
            "Продолжить". Вам на почту придет ссылка, перейдя по которой вы сможете изменить пароль
          </div>
        </div>
        <div class="builder-input-box">
          <div class="builder-input-box__label">
            <div class="input-box-label">Введите текущий пароль</div>
          </div>
          <div class="builder-input-box__input-wrapper">
            <div class="builder-input-box__input">
              <div class="form-group pr">
                <input type="password" id="txtPassword">
                <button class="password-type-toggle-icon">
                  <div class="button-icon-invisible">
                    <svg class="svg-icon icon-invisible">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-invisible"></use>
                    </svg>
                  </div>
                  <div class="button-icon-visible">
                    <svg class="svg-icon eye-visible">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#eye-visible"></use>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="profile-box__all-info-action">
          <button type="button" data-modal="exitModal" class="btn btn-disabled">Продолжить</button>
        </div>
      </div>
      <div class="profile-box__all-info">
        <div class="profile-box__all-info-content">
          <div class="profile-box__all-info-content-title profile-box__all-info-content-title-social">Соц. сети
            <div class="add-input-box__action">
              <button class="btn btn_add">
                <svg class="svg-icon icon-plus">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use>
                </svg>
                <span>Add Account</span>
              </button>
            </div>
          </div>
          <div class="list-options">
            <div class="list-options-item">
              <svg class="svg-icon icon-vk">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-vk"></use>
              </svg>
              <div class="list-options-item-content">vk.com/platform
                <button type="button">
                  <svg class="svg-icon icon-edit">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-edit"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div class="list-options-item">
              <svg class="svg-icon icon-whatsapp">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-whatsapp"></use>
              </svg>
              <div class="list-options-item-content">+7 (123) 456-78-90
                <button type="button">
                  <svg class="svg-icon icon-edit">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-edit"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div class="list-options-item"><img src="img/instagram.svg" alt="">
              <div class="list-options-item-content">@roman_budzak
                <button type="button">
                  <svg class="svg-icon icon-edit">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-edit"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>-->
  <v-form @submit="save">
    <div class="profile-box__all-info-conteiner">
      <div class="profile-box__all-info">
        <v-input title="Имя и Фамилия"
                 placeholder="Введите имя"
                 v-model="profile.name"
        />
        <v-input type="email"
                 title="Email"
                 placeholder="Введите адрес почты"
                 v-model="profile.email"
                 :disabled="!!profile.email"
        />
        <v-input type="tel"
                 title="phone"
                 placeholder="+7 (123) 456-78-90"
                 v-model="profile.phone"
        />
      </div>
      <div class="profile-box__all-info">
        <v-select label="Страна"/>
        <v-select label="Город"/>
        <v-checkbox label=""/>
      </div>
    </div>



  </v-form>
</template>

<script>
  import VForm from "../../molecules/VForm";
  import VInput from "../../molecules/VInput";
  import VSelect from "../../components/form/VSelect";

  export default {
    name: 'FormProfileEdit',
    components: {
      VForm,
      VInput,
      VSelect
    },
    data() {
      return {
        profile: {
          name: null,
          email: null,
          phone: null,
        }
      }
    },

    methods: {
      save(event) {
        console.log(event);
      }
    }
  }
</script>

<style scoped>

</style>
