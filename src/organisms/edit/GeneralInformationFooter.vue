<template>
  <div>
    <v-container>
      <v-box>
        <div class="profile-box__all-info-content">
          <div class="profile-box__all-info-content-title">Изменить пароль</div>
          <div class="profile-box__all-info-content-text">Для изменения пароля введите текущий пароль и нажмите кнопку
            "Продолжить". Вам на почту придет ссылка, перейдя по которой вы сможете изменить пароль
          </div>
        </div>
        <text-field label="Введите текущий пароль"
                    type="password"
        />
        <!-- <div class="builder-input-box">
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
         </div>-->
        <div class="profile-box__all-info-action">
          <button type="button" data-modal="exitModal" class="btn btn-disabled">Продолжить</button>
        </div>
      </v-box>
      <v-box>
        <social-list/>
      </v-box>
    </v-container>
  </div>
</template>

<script>
  import SocialList from "../../molecules/edit/SocialList";
  export default {
    name: 'GeneralInformationFooter',
    components: {
      SocialList
    }

  }
</script>

<style scoped>

</style>
