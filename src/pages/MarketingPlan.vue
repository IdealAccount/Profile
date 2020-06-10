<template>
  <main>
    <div class="profile-box">
      <div class="profile-box__wrapper">
        <div class="create-course-box__body">
          <div class="builder-box__body-wrapper">
            <div class="builder-box__start">
              <div class="builder-box__start-nav">
<!--                <a href="#" class="btn-link">-->
                <a href="!#" @click.prevent="$router.go(-1)" class="btn-link">
                  <svg class="svg-icon icon-back">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-back">
                      <svg id="icon-back" viewBox="0 0 32 32">
                        <path d="M25.333 14.667h-14.893l6.507-6.507c0.52-0.52 0.52-1.373 0-1.893-0.123-0.124-0.27-0.222-0.431-0.289s-0.334-0.101-0.509-0.101c-0.175 0-0.348 0.034-0.509 0.101s-0.308 0.165-0.431 0.289l-8.787 8.787c-0.124 0.123-0.222 0.27-0.289 0.431s-0.101 0.334-0.101 0.509c0 0.175 0.034 0.347 0.101 0.509s0.165 0.308 0.289 0.431l8.787 8.787c0.123 0.123 0.27 0.221 0.431 0.288s0.334 0.101 0.509 0.101 0.347-0.034 0.509-0.101c0.161-0.067 0.308-0.165 0.431-0.288s0.221-0.27 0.288-0.431 0.101-0.334 0.101-0.509c0-0.175-0.034-0.347-0.101-0.509s-0.165-0.308-0.288-0.431l-6.507-6.507h14.893c0.733 0 1.333-0.6 1.333-1.333s-0.6-1.333-1.333-1.333z"></path>
                      </svg>
                    </use>
                  </svg>
                  <span>Назад</span>
                </a>
              <!--  <svg class="svg-icon icon-back">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-back"></use>
                </svg>
                <span>Назад</span>-->
<!--                </a>-->
              </div>
              <div class="profile-marketing-plan">
                <div class="market-plan">
                  <div class="market-plan__header">
                    <h2>Маркетинг план</h2>
                    <div class="profile-video-link-mob">
                      <a href="https://www.youtube.com/embed/DJiTO9ZrOo0" target="_blank" class="">
                        <svg width="24px" height="24px">
                          <use xlink:href="#play"></use>
                        </svg>
                        Смотреть детальное видео</a>
                    </div>
                    <div class="head__text">
                      В компании есть 2 основных направления выплат:
                    </div>

                    <div class="header__content">
                      <div class="header-content-left">
                        <div class="content-info">
                          <div class="content-info-img">
                            <svg>
                              <use xlink:href="#market-plan"></use>
                            </svg>
                          </div>
                          <div class="content-info-text">
                            <div class="helper-img"></div>
                            <h3>Маркетинг план</h3>
                            <div class="info-text-content">Вознаграждение по маркетинг-плану-то, что ты заработаешь
                              вместе со своими менеджерами. То есть считается весь оборот твоей команды, включая тебя
                              самого. Здесь учитывается <span class="info-text-content-link">ГРУПОВОЙ объем</span>
                            </div>
                          </div>
                          <div class="content-info-modal info-modal-1">
                            <span class="red fw-bold">Групповой объем</span><span class="red"> (ГО)</span> — сумма
                            баллов твоего личного объема и личных объемов всех менеджеров твоей структуры. Из чего он
                            складывается? <br><span class="blue fw-bold">Личный объем</span>
                            <span class="blue">(ЛО)</span> — сумма Баллов за твою подписку (активация контракта).
                            <br> <b>Объем персональной группы</b> (боковой объем, или боковик) — сумма Балов за
                            активацию подписки менеджеров твоей структуры, имеющих квалификацию ниже Star.<br> <b>Объем
                            звезд</b> — сумма баллов за активацию
                            подписки менеджеров твоей структуры, имеющих квалификацию от Star и выше. Если ты достиг
                            квалификации Master тебе открывается доступ к выплатам по маркетинг-плану.<br><b>
                            Обязательное условие — выполнение ЛО 70 Баллов.</b>

                            <svg class="close-btn" width="16px" height="16px">
                              <use xlink:href="#close-btn"></use>
                            </svg>
                          </div>
                        </div>
                        <div class="content-info">
                          <div class="content-info-img">
                            <svg width=56px height=56px>
                              <use xlink:href="#bonus"></use>
                            </svg>
                          </div>
                          <div class="content-info-text">
                            <div class="helper-img"></div>
                            <h3>Бонус наставника</h3>
                            <div class="info-text-content">Вознаграждение по бонусу наставника - то, что ты заработаешь
                              за личный объем менеджеров твоей первой линии.
                            </div>


                          </div>
                        </div>
                      </div>
                      <div class="header-content-video">
                        <div class="movie-fixed_movie-container">
                          <iframe width="500" height="280" src="https://www.youtube.com/embed/DJiTO9ZrOo0"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="before-triangle-text">
                      Маркетинг план делится на 3 блока:
                    </div>
                    <div class="triangle-info">
                      <div class="triangle-img">
                        <svg>
                          <use xlink:href="#warning"></use>
                        </svg>
                      </div>
                      <div class="triangle-text">
                        <div class="triangle-text-title">Важно!</div>
                        <div class="triangle-text-content">
                          Переход на каждый следующий блок маркетинг-плана не отменяет действие предыдущего: тебе
                          выплачивают новые бонусы дополнительно к тем, что ты уже получаешь.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <tab-marketing/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import TabMarketing from "../templates/tabs/TabMarketing";
  export default {
    name: 'MarketingPlan',
    components: {
      TabMarketing
    }
  }
</script>

<style scoped>

</style>
