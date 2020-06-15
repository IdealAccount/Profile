import Vue from 'vue';
Vue.component('v-input', () => import('../atoms/VInput'))
Vue.component('v-container', () => import('../atoms/VContainer'))
Vue.component('v-box', () => import('../atoms/VBox'))

Vue.component('text-field', () => import('../molecules/form/TextField'))
Vue.component('v-form', () => import('../molecules/form/VForm'))
Vue.component('tab-wrapper', () => import('../molecules/wrappers/TabWrapper'))
Vue.component('page-wrapper', () => import('../molecules/wrappers/PageWrapper'))

/*****Components*****/
Vue.component('field-wrapper', () => import('../components/form/FieldWrapper'))
Vue.component('v-select', () => import('../components/form/VSelect'))
Vue.component('link-list', () => import('../components/LinkList'))
Vue.component('tab-component', () => import('../components/TabComponent'))


Vue.component('form-profile-edit', () => import('../organisms/edit/FormProfileEdit'))
Vue.component('general-information-footer', () => import('../organisms/edit/GeneralInformationFooter'))

Vue.component('line-chart', () => import('../components/charts/LineChart'))
