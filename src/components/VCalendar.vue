<template>
  <div class="profile-tabs-block-calendar-wrapper">
    <button @click.prevent="open"
            type="button"
            class="open-calendar"
    >
      <svg class="svg-icon calendar">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#calendar">
          <svg id="calendar" viewBox="0 0 40 40">
            <rect width="40" height="40" rx="6" fill="#F5F7FA"></rect>
            <path
              d="M26.3 12.8H24.5V11.9C24.5 11.6613 24.4052 11.4324 24.2364 11.2636C24.0676 11.0948 23.8387 11 23.6 11C23.3613 11 23.1324 11.0948 22.9636 11.2636C22.7948 11.4324 22.7 11.6613 22.7 11.9V12.8H17.3V11.9C17.3 11.6613 17.2052 11.4324 17.0364 11.2636C16.8676 11.0948 16.6387 11 16.4 11C16.1613 11 15.9324 11.0948 15.7636 11.2636C15.5948 11.4324 15.5 11.6613 15.5 11.9V12.8H13.7C12.9839 12.8 12.2972 13.0845 11.7908 13.5908C11.2845 14.0972 11 14.7839 11 15.5V26.3C11 27.0161 11.2845 27.7028 11.7908 28.2092C12.2972 28.7155 12.9839 29 13.7 29H26.3C27.0161 29 27.7028 28.7155 28.2092 28.2092C28.7155 27.7028 29 27.0161 29 26.3V15.5C29 14.7839 28.7155 14.0972 28.2092 13.5908C27.7028 13.0845 27.0161 12.8 26.3 12.8ZM27.2 26.3C27.2 26.5387 27.1052 26.7676 26.9364 26.9364C26.7676 27.1052 26.5387 27.2 26.3 27.2H13.7C13.4613 27.2 13.2324 27.1052 13.0636 26.9364C12.8948 26.7676 12.8 26.5387 12.8 26.3V20H27.2V26.3ZM27.2 18.2H12.8V15.5C12.8 15.2613 12.8948 15.0324 13.0636 14.8636C13.2324 14.6948 13.4613 14.6 13.7 14.6H15.5V15.5C15.5 15.7387 15.5948 15.9676 15.7636 16.1364C15.9324 16.3052 16.1613 16.4 16.4 16.4C16.6387 16.4 16.8676 16.3052 17.0364 16.1364C17.2052 15.9676 17.3 15.7387 17.3 15.5V14.6H22.7V15.5C22.7 15.7387 22.7948 15.9676 22.9636 16.1364C23.1324 16.3052 23.3613 16.4 23.6 16.4C23.8387 16.4 24.0676 16.3052 24.2364 16.1364C24.4052 15.9676 24.5 15.7387 24.5 15.5V14.6H26.3C26.5387 14.6 26.7676 14.6948 26.9364 14.8636C27.1052 15.0324 27.2 15.2613 27.2 15.5V18.2Z"
              fill="#8E99AB"></path>
          </svg>
        </use>
      </svg>
    </button>
    <div class="profile-tabs-block-calendar-date">{{calendar.selectedMonth}}, {{calendar.selectedYear}}</div>
    <div v-if="calendar.open"
         :style="calendar.open ? {display: 'block'} : ''"
         class="profile-tabs-block-calendar"
    >
      <div class="profile-tabs-block-calendar-years">
        <div class="profile-tabs-block-calendar-button">
          <button @click.prevent="calendar.prev" type="button">
            <svg class="svg-icon left">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#left">
                <svg id="left" viewBox="0 0 24 24">
                  <path
                    d="M14.71 15.88L10.83 12L14.71 8.12C14.8026 8.02742 14.8761 7.91751 14.9262 7.79654C14.9763 7.67558 15.0021 7.54593 15.0021 7.415C15.0021 7.28407 14.9763 7.15442 14.9262 7.03346C14.8761 6.91249 14.8026 6.80258 14.71 6.71C14.6175 6.61742 14.5076 6.54398 14.3866 6.49387C14.2656 6.44377 14.136 6.41798 14.005 6.41798C13.8741 6.41798 13.7445 6.44377 13.6235 6.49387C13.5025 6.54398 13.3926 6.61742 13.3 6.71L8.71005 11.3C8.61734 11.3925 8.5438 11.5024 8.49361 11.6234C8.44343 11.7443 8.4176 11.874 8.4176 12.005C8.4176 12.136 8.44343 12.2657 8.49361 12.3866C8.5438 12.5076 8.61734 12.6175 8.71005 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z"></path>
                </svg>
              </use>
            </svg>
          </button>
        </div>
        <div class="profile-tabs-block-calendar-year">{{calendar.selectedYear}}</div>
        <div class="profile-tabs-block-calendar-button">
          <button type="button"
                  :class="{'future': lastYear}"
                  :disabled="lastYear"
                  @click.prevent="calendar.next"
          >
            <svg class="svg-icon right">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#right">
                <svg id="right" viewBox="0 0 24 24">
                  <path d="M9.28995 15.88L13.1699 12L9.28995 8.12C9.19736 8.02742 9.12392 7.91751 9.07382 7.79654C9.02371 7.67558 8.99792 7.54593 8.99792 7.415C8.99792 7.28407 9.02371 7.15442 9.07382 7.03346C9.12392 6.91249 9.19736 6.80258 9.28995 6.71C9.38253 6.61742 9.49244 6.54398 9.6134 6.49387C9.73437 6.44377 9.86401 6.41798 9.99495 6.41798C10.1259 6.41798 10.2555 6.44377 10.3765 6.49387C10.4975 6.54398 10.6074 6.61742 10.6999 6.71L15.2899 11.3C15.6799 11.69 15.6799 12.32 15.2899 12.71L10.6999 17.3C10.6074 17.3927 10.4975 17.4663 10.3766 17.5164C10.2556 17.5666 10.1259 17.5924 9.99495 17.5924C9.86398 17.5924 9.73429 17.5666 9.61332 17.5164C9.49235 17.4663 9.38246 17.3927 9.28995 17.3C8.90995 16.91 8.89995 16.27 9.28995 15.88Z"></path>
                </svg>
              </use>
            </svg>
          </button>
        </div>
      </div>
      <div class="profile-tabs-block-calendar-months">
        <span v-for="(month, monthIndex) of calendar.months"
              :key="monthIndex"
              :class="[
                {'future': (monthIndex > currentDate.monthIndex) && lastYear},
                {'month-active': (calendar.selectedMonth === month)}
              ]"
              @click.prevent="selectMonth(month, monthIndex)"
        >
          {{month}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      date: {
        default: () => new Date()
      }
    },
    data() {
      return {
        calendar: {
          open: false,
          selectedYear: null,
          selectedMonth: null,
          months: {
            0: 'Январь',
            1: 'Февраль',
            2: 'Март',
            3: 'Апрель',
            4: 'Май',
            5: 'Июнь',
            6: 'Июль',
            7: 'Август',
            8: 'Сентябрь',
            9: 'Октябрь',
            10: 'Ноябрь',
            11: 'Декабрь',
          },
          next: () => {
            if (this.lastYear) {
              this.calendar.selectedMonth = this.currentMonth
              return
            }
            this.calendar.selectedYear++
          },
          prev: () => {
            this.calendar.selectedYear--
          }
        },
        selectedMonthIndex: null,
      }
    },
    mounted() {
      this.$set(this.calendar, 'selectedMonth', this.currentMonth);
      this.$set(this.calendar, 'selectedYear', this.currentDate.year);
    },
    computed: {
      currentDate() {
        return {
          monthIndex: this.date.getMonth(),
          year: this.date.getFullYear(),
        }
      },
      lastYear() {
        return this.calendar.selectedYear >= this.currentDate.year;
      },
      currentMonth() {
        return this.calendar.months[this.currentDate.monthIndex];
      },

    },
    methods: {
      open() {
        this.calendar.open = !this.calendar.open;
      },
      close() {
        this.calendar.open = false;
      },
      selectMonth(month, monthIndex) {
      // selectMonth(month, ) {
        if (this.currentDate.monthIndex < monthIndex && this.lastYear) return
        this.calendar.selectedMonth = month;

      },
    },
    beforeDestroy() {
    }
  }
</script>

<style scoped>

</style>
