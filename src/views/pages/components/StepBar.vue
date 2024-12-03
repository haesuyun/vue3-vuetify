<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  items: {
    type: Number,
    default: 7,
  },
  value: {
    type: Number,
    default: 1,
  }
})
</script>
<template>
  <section>
    <div class="step_bar">
      <div v-for="(item,i) in items" :key="i" :class="{on:value>i}"></div>
    </div>
    <div class="step_info" :aria-label="`단계 총 ${items}단계 중 ${value}단계`">
      <p class="text_14 font-weight-bold text-primary">{{ value }}</p>
      <p class="text_12 text-gray-080">/ {{ items }}</p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/settings' as *;

section {
  padding: 0 1.6rem;
  @media (min-width:1100px) {
    padding: 0;
  }
  .step_bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    div {
      flex: 1 1 auto;
      height: 0.2rem;
      margin: 0 0.1rem;
      background-color: $gray-030;
      &.on {
        background-color: $primary;
      }
      @media (min-width: 1100px){
        height: 0.4rem;
      }
    }
  }
  .step_info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0.8rem 0 0.6rem;
    margin-right: 0.2rem;;
    p {
      padding-left: 0.3rem;
      &+p {
        padding-top: 0.2rem;
      }
    }
  }
}
</style>