<template>
  <div class="statistic-box">
    <div class="statistic-box__body">
      <div class="builder-tabs-wrapper">
        <!-- <div class="builder-content-tabs">
           <ul class="content-tabs-nav">
             <li><a href="javascript://" onclick="openBlock(event, 'block1')" class="tabs-link tab-visible current-link">Показатели</a></li>
             <li><a href="javascript://" onclick="openBlock(event, 'block2')" class="tabs-link">Аналитика</a></li>
           </ul>
         </div>-->
        <div id="block1" class="builder-tabs-block block">
          <div class="statistics-analitics-wrapper">
            <div class="statistics-analitics-buttons-calendar">
              <div class="statistics-indicators">
                <button type="button"><img src="img/achievement.svg" alt=""></button>
                <div class="statistics-indicators-title">Показатели</div>
              </div>
              <div class="profile-tabs-block-calendar-wrapper">
                <div class="profile-tabs-block-calendar-date">Сентябрь, 2020</div>
                <button type="button" class="open-calendar">
                  <svg class="svg-icon calendar">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#calendar"></use>
                  </svg>
                </button>
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
                  <div class="profile-tabs-block-calendar-months">
                    <span>Январь</span><span>Февраль</span><span>Март</span><span>Апрель</span><span
                    class="month-active">Май</span><span class="future">Июнь</span><span class="future">Июль</span><span
                    class="future">Август</span><span class="future">Сентябрь</span><span
                    class="future">Октябрь</span><span class="future">Ноябрь</span><span class="future">Декабрь</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="statistics-analitics-block">
              <div class="statistics-analitics-block-conteiner">
                <div class="statistics-analitics-block-account-wrapper">
                  <div class="statistics-analitics-block-account-conteiner">
                    <div class="profile-tabs-block-account">
                      <div class="profile-tabs-block-account-title">Личный Объем</div>
                      <div class="profile-tabs-block-account-content">
                        <div class="profile-tabs-block-account-content-item color-blue">70</div>
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="statistics-analitics-block-account-conteiner">
                    <div class="profile-tabs-block-account">
                      <div class="profile-tabs-block-account-title">Счет</div>
                      <div class="profile-tabs-block-account-content">
                        <div class="profile-tabs-block-account-content-item">₽15 577</div>
                      </div>
                      <div class="info-box">
                        <button type="button">
                          <svg class="svg-icon icon-more-variable">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button class="btn desk-visible">Зарегистрировать</button>
                </div>
                <div class="chart-info-box__body-item">
                  <div class="chart-info-box__body-description">
                    <div class="chart-info-box__body-description-action">
                      <button type="button" class="btn __clean-btn">
                        <svg class="svg-icon icon-more-variable">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                        </svg>
                      </button>
                    </div>
                    <div class="chart-info-box__body-description-title">Групповой Объем</div>
                    <div class="chart-info-box__body-description-step"><b class="red">152 901</b><i>45.4%</i></div>
                    <div class="chart-info-box__body-description-time"><span>381156</span><i>Пред. месяц</i></div>
                  </div>
                  <div class="chart-info-box__body-chart"> <!--  big-chart (class) -->
                    <group-volume-chart></group-volume-chart>
                  </div>
                </div>
                <button class="btn mob">Зарегистрировать</button>
              </div>
              <div class="statistics-analitics-block-conteiner">
                <div class="chart-info-box__body-item">
                  <div class="chart-info-box__body-description">
                    <div class="chart-info-box__body-description-action">
                      <button type="button" class="btn __clean-btn">
                        <svg class="svg-icon icon-more-variable">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                        </svg>
                      </button>
                    </div>
                    <div class="chart-info-box__body-description-title">Регистрации</div>
                    <div class="chart-info-box__body-description-step"><b>1640</b><i>12.4%</i></div>
                    <div class="chart-info-box__body-description-time"><span>38156</span><i>Пред. месяц</i></div>
                  </div>
                  <div class="chart-info-box__body-chart">
                    <registrations-chart></registrations-chart>
                  </div>
                </div>
                <div class="chart-info-box__body-item">
                  <div class="chart-info-box__body-description">
                    <div class="chart-info-box__body-description-action">
                      <button type="button" class="btn __clean-btn">
                        <svg class="svg-icon icon-more-variable">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                        </svg>
                      </button>
                    </div>
                    <div class="chart-info-box__body-description-title">Активаций</div>
                    <div class="chart-info-box__body-description-step"><b>56</b><i class="down">2.0%</i></div>
                    <div class="chart-info-box__body-description-time"><span>38156</span><i>Пред. месяц</i></div>
                  </div>
                  <div class="chart-info-box__body-chart">
                    <activations-chart></activations-chart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="block2" class="builder-tabs-block block block2">
          <div class="statistics-analitics-wrapper mt88">
            <div class="statistics-analitics-buttons-calendar-wrapper">
              <div class="statistics-indicators-title">Аналитика</div>
              <div class="statistics-analitics-buttons-calendar">
                <div class="statistics-analitics-buttons">
                  <button type="button" class="statistics-btn statistics-btn-active">Сегодня</button>
                  <button type="button" class="statistics-btn">Вчера</button>
                  <button type="button" class="statistics-btn">Месяц</button>
                </div>
                <div class="statistics-analitics-calendar">
                  <input type="text" class="datepicker-here">
                  <svg class="svg-icon calendar">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#calendar"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div class="builder-content-tabs statistic-tabs-desk-visible">
              <ul class="statistic-tabs-nav">
                <li><a href="javascript://" onclick="statOpenBlock(event, 'block-tab1')"
                       class="statistic-tabs-link current-link">Общие</a></li>
                <li><a href="javascript://" onclick="statOpenBlock(event, 'block-tab2')" class="statistic-tabs-link">Личные</a>
                </li>
              </ul>
            </div>
            <div id="block-tab1" class="statistics-analitics-block block-tab">
              <div class="builder-box__body-title">
                <div class="create-course-box__body-title-name size-sm">Общие</div>
              </div>
              <div class="statistics-analitics-block-conteiner">
                <div class="statistics-analitics-block-account-wrapper">
                  <div class="statistics-analitics-block-account-conteiner">
                    <label>
                      <input type="radio" name="analitic-all" checked>
                      <div class="profile-tabs-block-account">
                        <div class="profile-tabs-block-account-title">Регистраций</div>
                        <div class="profile-tabs-block-account-content">
                          <div class="profile-tabs-block-account-content-item">12</div>
                          <div class="stastistic-item-percentage">
                            <svg class="svg-icon up-green">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#up-green"></use>
                            </svg>
                            7.4%
                          </div>
                          <div class="info-box">
                            <button type="button">
                              <svg class="svg-icon icon-more-variable">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div class="statistics-analitics-block-account-conteiner">
                    <label>
                      <input type="radio" name="analitic-all">
                      <div class="profile-tabs-block-account">
                        <div class="profile-tabs-block-account-title">Активаций</div>
                        <div class="profile-tabs-block-account-content">
                          <div class="profile-tabs-block-account-content-item">3</div>
                          <div class="stastistic-item-percentage">
                            <svg class="svg-icon up-green">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#up-green"></use>
                            </svg>
                            12.4%
                          </div>
                        </div>
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div class="statistics-analitics-block-table-users">
                  <table class="users-registration">
                    <thead>
                    <tr>
                      <th>Имя и Фамилия</th>
                      <th class="col-2 color-yellow">

                        Дата регистрации
                        <svg class="svg-icon down-yellow">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#down-yellow"></use>
                        </svg>
                      </th>
                      <th class="col-3">Дата активации</th>
                      <th class="col-6">Наставник</th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td class="col-1">Максим Бабюк</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">Вчера</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Ольга Грудистова</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">23.03.2020</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Андрей Термишев</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">23.03.2020</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Мартирос Миракян</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">23.03.2020</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Данила Овчинников</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">23.03.2020</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Евгений Старков</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">2 часа назад</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Роман Будзак</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">3 часа назад</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Александр Помошников</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">7 часов назад</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div id="block-tab2" class="statistics-analitics-block block-tab">
              <div class="builder-box__body-title">
                <div class="create-course-box__body-title-name size-sm">Личные</div>
              </div>
              <div class="statistics-analitics-block-conteiner">
                <div class="statistics-analitics-block-account-wrapper">
                  <div class="statistics-analitics-block-account-conteiner">
                    <label>
                      <input type="radio" name="analitic-personal" checked>
                      <div class="profile-tabs-block-account">
                        <div class="profile-tabs-block-account-title">Регистраций</div>
                        <div class="profile-tabs-block-account-content">
                          <div class="profile-tabs-block-account-content-item">7</div>
                          <div class="stastistic-item-percentage">
                            <svg class="svg-icon up-green">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#up-green"></use>
                            </svg>
                            11.4%
                          </div>
                          <div class="info-box">
                            <button type="button">
                              <svg class="svg-icon icon-more-variable">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div class="statistics-analitics-block-account-conteiner">
                    <label>
                      <input type="radio" name="analitic-personal">
                      <div class="profile-tabs-block-account">
                        <div class="profile-tabs-block-account-title">Активаций</div>
                        <div class="profile-tabs-block-account-content">
                          <div class="profile-tabs-block-account-content-item">0</div>
                          <div class="stastistic-item-percentage"></div>
                        </div>
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div class="statistics-analitics-block-table-users">
                  <table class="users-registration">
                    <thead>
                    <tr>
                      <th>Имя и Фамилия</th>
                      <th class="col-2">Дата регистрации</th>
                      <th class="col-3 color-yellow">Дата активации
                        <svg class="svg-icon down-yellow">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#down-yellow"></use>
                        </svg>
                      </th>
                      <th class="col-6">Наставник</th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td class="col-1">Евгений Старков</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">2 часа назад</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Роман Будзак</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">3 часа назад</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Александр Помошников</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">7 часов назад</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Максим Бабюк</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">Вчера</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Ольга Грудистова</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">23.03.2020</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Андрей Термишев</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">23.03.2020</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Мартирос Миракян</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">23.03.2020</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-1">Данила Овчинников</td>
                      <td class="col-2">31.08.2019</td>
                      <td class="col-3">23.03.2020</td>
                      <td class="col-6">Ольга Собольникова</td>
                      <td class="col-5">
                        <div class="info-box">
                          <button type="button">
                            <svg class="svg-icon icon-more-variable">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-variable"></use>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GroupVolumeChart from "../../components/charts/GroupVolumeChart";
  import RegistrationsChart from "../../components/charts/RegistrationsChart";
  import ActivationsChart from "../../components/charts/ActivationsChart";

  export default {
    components: {
      GroupVolumeChart,
      RegistrationsChart,
      ActivationsChart
    }
  }
</script>

<style scoped>

</style>
