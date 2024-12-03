<script setup>
import { ref } from 'vue'

const isLargeFont = ref(false)

function toggleFontSize() {
  isLargeFont.value = !isLargeFont.value
  if (isLargeFont.value) {
    document.documentElement.style.setProperty('font-size', '75%', 'important')
  } else {
    document.documentElement.style.setProperty('font-size', '62.5%')
  }
}

</script>
<template>
  <header>
    <button aria-label="뒤로가기">
      <v-icon class="back_black"></v-icon>
    </button>
    <h1 class="heading_38">LOGO</h1>
    <!-- 퍼블 화면 큰글씨 확인용 -->
    <v-checkbox
      v-model="isLargeFont"
      @click="toggleFontSize"
      class="ml-auto"
      hide-details
      ></v-checkbox>
  </header>
</template>
<style lang="scss" scoped>
  header {
    position: sticky;
    display: flex;
    align-items: center;
    top:0;
    width: 100%;
    height: 5.6rem;
    max-width: 60rem;
    padding: 0 2rem;
    background: #fff;
    z-index: 100;
    h1 {
      display: none;
      width: 100%;
      text-align: center;
    }
    @media (min-width: 1100px) {
      margin-top: 6rem;
      margin-bottom: 3.2rem;
      padding: 0;
      button {
        display: none;
      }
      h1 {
        display: block;
      }
    }
  }
</style>