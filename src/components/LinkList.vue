<template>
  <ul class="list">
    <li v-for="(link, index) of data" :key="index">
      <router-link :to="{name: link.src}" tag="button" class="__clean-btn">
        <span>{{link.title}}</span>
        <svg class="svg-icon icon-back">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-back">
            <svg id="icon-back" viewBox="0 0 32 32">
              <path d="M25.333 14.667h-14.893l6.507-6.507c0.52-0.52 0.52-1.373 0-1.893-0.123-0.124-0.27-0.222-0.431-0.289s-0.334-0.101-0.509-0.101c-0.175 0-0.348 0.034-0.509 0.101s-0.308 0.165-0.431 0.289l-8.787 8.787c-0.124 0.123-0.222 0.27-0.289 0.431s-0.101 0.334-0.101 0.509c0 0.175 0.034 0.347 0.101 0.509s0.165 0.308 0.289 0.431l8.787 8.787c0.123 0.123 0.27 0.221 0.431 0.288s0.334 0.101 0.509 0.101 0.347-0.034 0.509-0.101c0.161-0.067 0.308-0.165 0.431-0.288s0.221-0.27 0.288-0.431 0.101-0.334 0.101-0.509c0-0.175-0.034-0.347-0.101-0.509s-0.165-0.308-0.288-0.431l-6.507-6.507h14.893c0.733 0 1.333-0.6 1.333-1.333s-0.6-1.333-1.333-1.333z"></path>
            </svg>
          </use>
        </svg>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      data: Array,
    },
  }
</script>

<style scoped>

</style>
