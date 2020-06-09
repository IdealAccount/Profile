<template>
  <div class="builder-input-box">
    <div class="builder-input-box__label">
      <div class="input-box-label">{{label}}
        <div class="radio-checker-box">
          <ul class="list">
            <li>
              <div class="radio-box">
                <label>
                  <input type="radio" name="radio"><span>Мужской</span>
                </label>
              </div>
            </li>
            <li>
              <div class="radio-box">
                <label>
                  <input type="radio" name="radio" checked><span>Женский</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
