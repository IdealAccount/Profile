import Vue from 'vue';
/*****FORM FIELDS*****/
Vue.component('v-input', () => import('../atoms/VInput'))
Vue.component('text-field', () => import('../molecules/TextField'))
Vue.component('field-wrapper', () => import('../components/form/FieldWrapper'))
Vue.component('v-select', () => import('../components/form/VSelect'))
Vue.component('v-form', () => import('../molecules/VForm'))
/*****WRAPPERS*****/
Vue.component('v-container', () => import('../atoms/VContainer'))
Vue.component('v-box', () => import('../atoms/VBox'))
/*****Components*****/
Vue.component('form-profile-edit', () => import('../organisms/edit/FormProfileEdit'))
Vue.component('general-information-footer', () => import('../organisms/edit/GeneralInformationFooter'))
