<template>
  <div class="builder-input-box">
    <div class="builder-input-box__label" >
      <div class="input-box-label">{{label}}</div>
    </div>
    <div class="select-custom"
         @click.stop="showDropdown = !showDropdown"
    >
      <div class="select-custom__button">
        <div id="title" class="title">{{selected}}</div>
        <svg class="svg-icon arrow-down">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
        </svg>
      </div>
      <transition name="show-dropdown">
        <ul v-if="showDropdown">
          <li v-for="(option, index) of options"
              :key="index"
              @click.prevent="select(option, index)"
          >
            {{option.title}}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: String,
    },
    data() {
      return {
        showDropdown: false,
        options: [
          {
            title: 'England',
            selected: true,
          },
          {
            title: 'Ukraine',
            selected: false,
          },
          {
            title: 'Poland',
            selected: false,
          },
          {
            title: 'United States',
            selected: false,
          },
          {
            title: 'Spain',
            selected: false,
          },
        ],
        selected: null,
      }
    },
    mounted() {
      this.selected = this.options ? this.options[0].title : this.selected
    },
    methods: {
      select(option, id) {
        if (this.option.selected) return;
        this.options.forEach((option, index) => {
          if (id !== index) option.selected = false;
        })
        option.selected = true;
        this.selected = option.title
      }
    }
  }
</script>

<style scoped>

</style>
