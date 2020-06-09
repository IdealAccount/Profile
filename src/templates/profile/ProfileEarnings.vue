<template>
  <div id="block2" class="profile-tabs-block block">
    <div class="profile-tabs-block-conteiner fdc">
      <div class="profile-tabs-block-calendar-wrapper">
        <button type="button" class="open-calendar">
          <svg class="svg-icon calendar">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#calendar"></use>
          </svg>
        </button>
        <div class="profile-tabs-block-calendar-date">Май, 2020</div>
        <div class="profile-tabs-block-calendar">
          <div class="profile-tabs-block-calendar-years">
            <div class="profile-tabs-block-calendar-button">
              <button type="button">
                <svg class="svg-icon left">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#left"></use>
                </svg>
              </button>
            </div>
            <div class="profile-tabs-block-calendar-year">2020</div>
            <div class="profile-tabs-block-calendar-button">
              <button type="button" class="future">
                <svg class="svg-icon right">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#right"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="profile-tabs-block-calendar-months"><span>Январь</span><span>Февраль</span><span>Март</span><span>Апрель</span><span class="month-active">Май</span><span class="future">Июнь</span><span class="future">Июль</span><span class="future">Август</span><span class="future">Сентябрь</span><span class="future">Октябрь</span><span class="future">Ноябрь</span><span class="future">Декабрь</span></div>
        </div>
      </div>
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
            <ul class="list">
              <li>
                <button type="button" data-id="" class="__clean-btn"><span>Подать заявку на вывод</span>
                  <svg class="svg-icon icon-back">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-back"></use>
                  </svg>
                </button>
              </li>
              <li>
                <button type="button" data-id="" class="__clean-btn"><span>Сделать перевод</span>
                  <svg class="svg-icon icon-back">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-back"></use>
                  </svg>
                </button>
              </li>
              <li>
                <button type="button" data-id="" class="__clean-btn"><span>Statement</span>
                  <svg class="svg-icon icon-back">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-back"></use>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
