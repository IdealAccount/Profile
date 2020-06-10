<template>
  <div class="builder-box">
    <div class="builder-box__wrapper" :class="customClass">
      <div class="builder-box__body-wrapper">
        <div class="create-course-box__start">
          <div class="create-course-box__start-nav pb12">
            <a href="#" @click.prevent="$router.go(-1)" class="btn-link">
              <svg class="svg-icon icon-back">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-back">
                  <svg id="icon-back" viewBox="0 0 32 32">
                    <path d="M25.333 14.667h-14.893l6.507-6.507c0.52-0.52 0.52-1.373 0-1.893-0.123-0.124-0.27-0.222-0.431-0.289s-0.334-0.101-0.509-0.101c-0.175 0-0.348 0.034-0.509 0.101s-0.308 0.165-0.431 0.289l-8.787 8.787c-0.124 0.123-0.222 0.27-0.289 0.431s-0.101 0.334-0.101 0.509c0 0.175 0.034 0.347 0.101 0.509s0.165 0.308 0.289 0.431l8.787 8.787c0.123 0.123 0.27 0.221 0.431 0.288s0.334 0.101 0.509 0.101 0.347-0.034 0.509-0.101c0.161-0.067 0.308-0.165 0.431-0.288s0.221-0.27 0.288-0.431 0.101-0.334 0.101-0.509c0-0.175-0.034-0.347-0.101-0.509s-0.165-0.308-0.288-0.431l-6.507-6.507h14.893c0.733 0 1.333-0.6 1.333-1.333s-0.6-1.333-1.333-1.333z"></path>
                  </svg>
                </use>
              </svg>
              <span>Назад</span>
            </a>
          </div>
        </div>
        <div class="create-course-box__body">
          <div class="create-course-box__body-title mt0">
            <div class="create-course-box__body-title-name">{{title}}</div>
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      customClass: String,
    }
  }
</script>

<style scoped>

</style>
