<template>
  <div>
    <div class="create-course-box__head">
      <div class="create-course-box__head-detail">
        <div class="create-course-box__head-exit">
          <button type="button" class="__clean-btn">
            <svg class="svg-icon icon-log-out">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-log-out"></use>
            </svg>
            <svg class="svg-icon icon-close">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
            </svg>
          </button>
        </div>
        <div class="create-course-box__head-name">Мои данные</div>
      </div>
      <div class="create-course-box__head-actions">
        <div class="create-course-box__head-action">
          <button type="button" class="btn">Сохранить изменения и завершить</button>
        </div>
      </div>
    </div>
    <div class="profile-box__wrapper profile-edit">
      <div class="profile-box__header-user">
        <div class="uploader-box">
          <v-form>
            <div class="uploader-box__view profile-box__header-user-photo">
              <img src="../../assets/img/users-photo.png" alt="">
            </div>
            <div class="uploader-box__file profile-box__header-user-data">
              <label>
                <input type="file" id="uploadImg"><span class="btn btn_add">Изменить фото профиля</span>
              </label>
            </div>
          </v-form>
        </div>
      </div>
      <div class="profile-box__all-info-wrapper">
        <div class="profile-box__all-info-header">Общая информация</div>
        <GeneralInformation/>
        <!--<div class="profile-box__all-info-conteiner">
          <div class="profile-box__all-info">
            <div class="builder-input-box">
              <div class="builder-input-box__label">
                <div class="input-box-label">Имя и Фамилия</div>
              </div>
              <div class="builder-input-box__input-wrapper">
                <div class="builder-input-box__input">
                  <div class="form-edit-group">
                    <input type="text" value="Roman Budzak" placeholder="">
                  </div>
                </div>
              </div>
            </div>
            <div class="builder-input-box">
              <div class="builder-input-box__label">
                <div class="input-box-label">Email</div>
              </div>
              <div class="builder-input-box__input-wrapper">
                <div class="builder-input-box__input">
                  <div class="form-edit-group">
                    <input type="email" value="roman.budzak@gmail.com" placeholder="" disabled>
                  </div>
                </div>
              </div>
            </div>
            <div class="builder-input-box">
              <div class="builder-input-box__label">
                <div class="input-box-label">Телефон</div>
              </div>
              <div class="builder-input-box__input">
                <div class="form-edit-group">
                  <input id="phone" name="phone" type="tel">
                  &lt;!&ndash;input(type="text", placeholder="+7 (123) 456-78-90")&ndash;&gt;
                </div>
              </div>
            </div>
          </div>
          <div class="profile-box__all-info">
            <div class="builder-input-box">
              <div class="builder-input-box__label">
                <div class="input-box-label">Страна</div>
              </div>

            </div>
            <div class="builder-input-box">
              <div class="builder-input-box__label">
                <div class="input-box-label">Город</div>
              </div>
              <div id="select-custom2" class="select-custom">
                <div class="select-custom__button">
                  <div id="title" class="title"> Lviv</div>
                  <svg class="svg-icon arrow-down">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                  </svg>
                </div>
                <ul>
                  <li>Option1</li>
                  <li>Option2</li>
                  <li>Option3</li>
                  <li>Option4</li>
                  <li>Option5</li>
                </ul>
              </div>
            </div>
            <div class="builder-input-box">
              <div class="builder-input-box__label">
                <div class="input-box-label">Город
                  <div class="radio-checker-box">
                    <ul class="list">
                      <li>
                        <div class="radio-box">
                          <label>
                            <input type="radio" name="radio"><span>Мужской</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="radio-box">
                          <label>
                            <input type="radio" name="radio" checked><span>Женский</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profile-box__all-info-conteiner">
          <div class="profile-box__all-info">
            <div class="profile-box__all-info-content">
              <div class="profile-box__all-info-content-title">Изменить пароль</div>
              <div class="profile-box__all-info-content-text">Для изменения пароля введите текущий пароль и нажмите кнопку "Продолжить". Вам на почту придет ссылка, перейдя по которой вы сможете изменить пароль</div>
            </div>
            <div class="builder-input-box">
              <div class="builder-input-box__label">
                <div class="input-box-label">Введите текущий пароль</div>
              </div>
              <div class="builder-input-box__input-wrapper">
                <div class="builder-input-box__input">
                  <div class="form-edit-group pr">
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
                    </svg><span>Add Account</span>
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
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import GeneralInformation from "../../templates/profile/edit/GeneralInformation";
  export default {
    name: 'UserProfileEdit',
    components: {
      GeneralInformation,
    },
  }
</script>

<style scoped>

</style>
