<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__details">
        <div class="header__mobile-button">
          <button type="button" class="__clean-btn"><i></i></button>
        </div>
        <div class="header__logo"><a href="#">
          <svg class="svg-icon icon-logo">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-logo"></use>
          </svg>
        </a></div>
        <div class="header__user">
          <div class="header__user-view">
            <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" alt=""/>
          </div>
          <div class="header__user-detail">
            <b>Roman B. A</b>
            <span>ID: 777-011655</span>
          </div>
        </div>
      </div>
      <div class="header__nav">
        <ul class="list">
          <li><a href="#!">
            <svg class="svg-icon icon-statistics">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-statistics"></use>
            </svg>
            <span>Статистика</span></a></li>
          <li class="active">
            <router-link :to="{path: '/profile'}">
            <svg class="svg-icon icon-training">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-training"></use>
            </svg>
            <span>Обучение</span></router-link></li>
          <li><a href="#!">
            <svg class="svg-icon icon-structure">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-structure"></use>
            </svg>
            <span>Структура</span></a></li>
          <li><a href="#!">
            <svg class="svg-icon icon-setting">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-setting"></use>
            </svg>
            <span>Инструменты</span></a></li>
          <li><a href="#!">
            <svg class="svg-icon icon-message">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-message"></use>
            </svg>
            <span>Сообщения</span></a></li>
        </ul>
      </div>
      <div class="header__action">
        <button type="button" class="__clean-btn">
          <svg class="svg-icon icon-menu">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-menu"></use>
          </svg>
          <span>Уменьшить меню</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
