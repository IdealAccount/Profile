<template>
  <div class="profile-box__all-info-content">
    <div class="profile-box__all-info-content-title profile-box__all-info-content-title-social">Соц. сети
      <div class="add-input-box__action">
        <button class="btn btn_add">
          <svg class="svg-icon icon-plus">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use>
          </svg>
          <span>Add Account</span>
        </button>
      </div>
    </div>
    <div class="list-options">
      <div v-for="(social, index) of socialList"
           :key="index"
           class="list-options-item"
      >
<!--        <svg v-if="social.icon.type === 'svg'"
             class="svg-icon"
             :class="social.icon.class"
        >
          <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="social.icon.href"></use>
        </svg>
        <img v-esle-if="social.icon.type === 'img'"
             :src="social.icon.href"
             :alt="social.icon.href"
        >-->
        <div class="list-options-item-content">
          {{social.name}}
          <button type="button" @click.prevent>
            <svg class="svg-icon icon-edit">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-edit"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        socialList: [
          {
            name: 'vk.com/platform',
            icon: {
              type: 'svg',
              href: '#icon-vk',
              class: 'icon-vk'
            },
            editing: false,
          },
          {
            name: '+7 (123) 456-78-90',
            icon: {
              type: 'svg',
              href: '#icon-whatsapp',
              class: 'icon-whatsapp'
            },
            editing: false,
          },
          {
            name: 'vk.com/platform',
            icon: {
              type: 'img',
              href: 'instagram.svg',
            },
            editing: false,
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
