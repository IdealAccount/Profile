<template>
  <field-wrapper :label="label">
    <div class="select-custom"
         :class="{open: showDropdown}"
         @click.stop="showDropdown = !showDropdown"
         tabindex="-1"
         @focusout="closeSelect"
    >
      <div class="select-custom__button">
        <div id="title" class="title">{{selected}}</div>
        <svg class="svg-icon arrow-down">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
        </svg>
      </div>
      <transition name="show-dropdown">
        <ul>
          <li v-for="(option, index) of options"
              :key="index"
              @click.prevent="select(index)"
          >
            {{option.title}}
          </li>
        </ul>
      </transition>
    </div>
  </field-wrapper>
</template>

<script>
  export default {
    props: {
      label: String,
      optionsData: {
        type: Array,
      }
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
        defaultOptions: [
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
        selected: '',
      }
    },
    mounted() {
      this.options = (Array.isArray(this.optionsData) && this.optionsData.length) || this.options
      this.selected = this.options ? this.options[0].title : this.selected
    },
    methods: {
      select(id) {
        this.options.forEach((option, index) => {
          if (id === index && option.selected) return false;
          else if (id !== index) option.selected = false;
          else {
            option.selected = true
            this.selected = option.title
          }
        })
      },
      closeSelect() {
        this.showDropdown = false;
      }
    },
  }
</script>

<style scoped>
  .select-custom:focus {
    outline: none;
  }
</style>
