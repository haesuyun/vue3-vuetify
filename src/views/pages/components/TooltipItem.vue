<script setup>
import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['close']);
const props = defineProps({
  type: {
    type: String,
  },
  title: {
    type: String,
  },
  hideClose: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div 
    class="tooltip_box"
    tabindex="-1" 
    ref="tooltipContentRef" 
    :class="{'dark':type=='dark'}"
    >
    <div class="tooltip_content" :class="{'pr-8':!hideClose}">
      <div v-if="title" class="text_12 title mb-1">{{ title }}</div>
      <p class="text_12">
        <slot></slot>
      </p>
    </div>
    <button 
      v-if="!hideClose"
      type="button"
      class="btn_close" 
      aria-label="닫기"
      @click="emit('close')"  
    >
      <v-icon size="small" :class="[type=='dark'?'close_white':'close_black']"></v-icon>
    </button>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/settings' as *;
.tooltip_box {
  position: relative;
  max-width: 21.6rem;
  width: auto;
  padding: 0;
  background-color: $white;
  border-radius: .8rem;
  color: $black;
  box-shadow: 0px 2px 16px 0 rgba($black, 20%);
  @media (min-width: 1100px) {
    max-width: 30rem;
  }
  .tooltip_content {
    position: relative;
    padding: 1.6rem;
    min-width: 21rem;
    @media (min-width: 1100px) {
      min-width: 24rem;
    }
    .text_12 {
      font-weight: 400;
      &.title {
        font-weight: 700;
      }
    }
  }
  .btn_close {
    position: absolute;
    top: 1.6rem;
    right: 1.2rem;
    width: 1.6rem;
    min-width: auto;
    height: 1.6rem;
    padding: 0;
    pointer-events: auto;
  }
  &.dark {
    background-color: $dark-gray-600;
    color: $white;
    &.top:before {
      border-top-color: $dark-gray-600;
    }
    &.bottom:before {
      border-bottom-color: $dark-gray-600;
    }
    &.left:before {
      border-left-color: $dark-gray-600;
    }
    &.right:before {
      border-right-color: $dark-gray-600;
    }
  }
  // 말풍선 꼬리
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
  }
  &.top:before {
    bottom: -.8rem;
    border-top: .9rem solid $white;
  }
  &.bottom:before {
    top: -.8rem;
    border-bottom: .9rem solid $white;
  }
  &.left {
    left: 0;
    &:before {
      left: 0;
      border-left: 1rem solid $white;
      border-top: .8rem solid rgba(0,0,0,0);
      border-bottom: .8rem solid rgba(0,0,0,0);
    }
  }
  &.right {
    right: 0;
    &:before {
      right: 0;
      border-right: 1rem solid $white;
      border-top: .8rem solid rgba(0,0,0,0);
      border-bottom: .8rem solid rgba(0,0,0,0);
    }
  }
  &.center {
    left: 50%;
    transform: translateX(-50%);
    &:before {
      left: 50%;
      transform: translate(-50%);
      border-left: .6rem solid rgba(0,0,0,0);
      border-right: .6rem solid rgba(0,0,0,0);
    }
  }
}
</style>