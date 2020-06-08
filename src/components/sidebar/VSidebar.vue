<template>
  <aside>
    <div class="page-wrapper">
      <main>
        <div class="profile-box">
          <div class="profile-box__wrapper">
            <div class="profile-box__header">
              <div class="profile-box__header-title">Мой Профиль</div>
              <div class="profile-box__header-user">
                <div class="profile-box__header-user-photo"><img src="img/users-photo.png" alt=""></div>
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
                      <button type="button" class="third-btn">
                        <svg class="svg-icon icon-edit">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-edit"></use>
                        </svg>Edit Profile
                      </button>
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
            <div class="builder-tabs-wrapper">
              <div class="builder-content-tabs">
                <ul class="content-tabs-nav">
                  <li><a href="javascript://" onclick="openBlock(event, 'block1')" class="tabs-link tab-visible current-link">General</a></li>
                  <li><a href="javascript://" onclick="openBlock(event, 'block2')" class="tabs-link">My earnings</a></li>
                </ul>
              </div>
              <div id="block1" class="profile-tabs-block block">
                <div class="profile-tabs-block-conteiner">
                  <div class="profile-tabs-block-registration-wrapper">
                    <div class="profile-tabs-block-content">
                      <div class="profile-tabs-block-content-part">Кол-во менеджеров<br><span>4058</span></div>
                      <div class="profile-tabs-block-content-part">ГО Персональный <br><span class="yellow-span">1705</span></div>
                    </div>
                    <div class="profile-tabs-block-content-registration">Регистрация / Активация
                      <div class="profile-tabs-block-content-registration-part">
                        <div class="profile-tabs-block-content-registration-part-item">Дата регистрации<br><span>19.08.2019</span></div>
                        <div class="profile-tabs-block-content-registration-part-item">Зарегистрировал (-а)
                          <div class="profile-tabs-block-content-registration-user">
                            <div class="profile-tabs-block-content-registration-user-photo"><img src="img/users-photo.png" alt=""></div>Роман Будзак
                          </div>
                        </div>
                      </div>
                      <div class="profile-tabs-block-content-registration-part">
                        <div class="profile-tabs-block-content-registration-part-item">Дата активации<br><span>03.02.2020 05:54:35</span></div>
                        <div class="profile-tabs-block-content-registration-part-item">Истекает<br><span>02.06.2020 02:54:34</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="profile-tabs-block-plan-wrapper">
                    <button type="button" class="btn">Маркетинг план</button>
                    <div class="cabinet-course-box__main-info-nav">
                      <ul class="list">
                        <li>
                          <button type="button" data-id="" class="__clean-btn"><span>Документы</span>
                            <svg class="svg-icon icon-back">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-back"></use>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button type="button" data-id="" class="__clean-btn"><span>Стандарты и процедуры</span>
                            <svg class="svg-icon icon-back">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-back"></use>
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="profile-tabs-block-go-out">
                  <button type="button" class="third-btn">
                    <svg class="svg-icon icon-log-out-yellow">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-log-out-yellow"></use>
                    </svg>Выйти
                  </button>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  </aside>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
