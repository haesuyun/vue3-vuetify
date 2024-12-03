<script setup>
import { ref, watch, computed, defineProps, defineEmits } from 'vue';
const props = defineProps({
  title: {
    type: Array,
    required: true,
  },
  hideAction: {
    type: Boolean,
    default: false,
  },
  scrollTop: {
    type: Number,
  }
})
const emit = defineEmits(['close','scroll']);
function handleClose() {
  emit('close');
}
const scrollValue = computed({
  get() {
    return props.scrollTop
  },
  set(value) {
    emit('scroll', value)
  }
})
const onScroll = (event) => {
  let value = event.target.scrollTop;
  scrollValue.value = value;
}
watch(
  ()=>props.scrollTop,
  (newValue)=>{
    document.getElementById('scroll-target').scrollTop = newValue
  }
)
</script>
<template>
  <section class="dialog_section">
    <div class="dialog_header">
      <h1 class="title_18 font-weight-medium">
        <span v-for="(item, i) in title" :key="i" class="pr-1">{{ item }}</span>
      </h1>
      <button @click="handleClose" aria-label="닫기">
        <v-icon class="close_black"></v-icon>
      </button>
    </div>
    <div class="dialog_container" id="scroll-target">
      <div v-scroll:#scroll-target="onScroll"></div>
      <slot></slot>
    </div>
    <div v-if="!hideAction" class="dialog_footer">
      <v-btn-group class="large">
        <slot name="action"></slot>
      </v-btn-group>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/settings' as *;
.dialog_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  .dialog_header {
    position:sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 2.4rem 2.4rem 0.9rem;
    @media (min-width:1100px) {
      padding: 2.8rem 3.2rem;
    }
    h1 {
      @media (min-width:1100px) {
        font-size: 2.4rem;
      }
      span {
        display: inline-block;
        @media (max-width:320px) {
          display: inline;
        }
      }
    }
    &:before {
      content: '';
      display: block;
      position: absolute;
      height: 2.4rem;
      width: 100%;
      left: 0;
      bottom: -2.4rem;
      background: $white;
      background: linear-gradient(0deg, rgba($white,0) 0%, rgba($white,1) 100%);
    }
  }
  .dialog_container {
    width: 100%;
    overflow-y: auto;
    flex: 1 1 auto;
    padding: 2.4rem 2.4rem 4rem;
    @media (min-width:1100px) {
      padding-left: 3.2rem;
      padding-right: 3.2rem;
    }
  }
  .dialog_footer {
    position: relative;
    width: 100%;
    margin-top: -2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.6rem;
    background: $white;
    z-index: 10;
    .v-btn-group {
      margin-top: 0;
      max-width: 40rem;
    }
    &:before {
      content: '';
      display: block;
      position: absolute;
      height: 2.4rem;
      width: 100%;
      left: 0;
      top: -2.4rem;
      background: $white;
      background: linear-gradient(0deg, rgba($white,1) 0%, rgba($white,0) 100%);
    }
  }
}
</style>