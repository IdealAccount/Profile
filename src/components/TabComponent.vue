<template>
<!--  class="builder-tabs-wrapper"-->
  <div>
    <div class="builder-content-tabs">
      <ul class="content-tabs-nav">
        <li v-for="(tab, index) of data">
          <button class="tabs-link"
                  :class="{'current-link': tab.active, 'tab-visible': tab.active}"
                  type="button"
                  :key="index"
                  @click.prevent="tabChange(tab, index)"
          >
            {{tab.title}}
          </button>
        </li>
      </ul>
    </div>
    <transition name="change-tab" mode="out-in">
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'VTab',
    props: {
      data: {},
      path: String
    },
    data() {
      return {
        tabComponent: null,
      }
    },
    created() {
      this.tabComponent = this.data.find(tab => tab.active).component
    },
    computed: {
      currentTabComponent() {
        let component = this.tabComponent;
        return () => import(`@/organisms/tabs/${this.path}/${component}`)
      },
     /* tabComponent() {
        this.data.find(tab => {
          return tab.active && (() => import(`@/organisms/tabs/profile/${tab.component}`))
        })
      }*/
    },
    methods: {
      tabChange(tab, id) {
        if (tab.component === this.tabComponent) return;
        this.data.forEach((tab, index) => {
          if (id !== index) tab.active = false;
        })
        tab.active = true;
        this.tabComponent = tab.component
      }
    }
  }
</script>

<style scoped>

</style>
