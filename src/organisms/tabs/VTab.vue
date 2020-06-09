<template>
  <div class="builder-tabs-wrapper">
    <div class="builder-content-tabs">
      <ul class="content-tabs-nav">
        <li v-for="(tab, index) of tabs">
          <button class="tabs-link"
                  :class="{'current-link': tab.active, 'tab-visible': tab.active}"
                  type="button"
                  :key="index"
                  @click.prevent="tabChange([tab, index])"
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
    data() {
      return {
        tabComponent: 'ProfileGeneral',
        activeTab: true,
        tabs: [
          {
            title: 'General',
            component: 'ProfileGeneral',
            active: true,
          },
          {
            title: 'My Earnings',
            component: 'ProfileEarnings',
            active: false,
          }
        ]
      }
    },
    computed: {
      currentTabComponent() {
        let component = this.tabComponent;
        return () => import(`@/templates/profile/${component}`)
      },
    },
    methods: {
      tabChange([tab, id]) {
        if (tab.component === this.tab) return;
        this.tabs.forEach((tab, index) => {
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
