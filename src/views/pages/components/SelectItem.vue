<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue';
const props = defineProps({
  label: {
    type: String,
  },
  text: {
    type: String,
  },
  options: {
    type: Array,
    default: () => [],
  },
  value: {
    type: Number,
    default: 0,
  }
})
// const selectValue = ref(0);
const emit = defineEmits(['update:modelValue']);
const optionValue = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>
<template>
  <div v-if="options.length" class="v-btn v-btn--size-default select mt-3">
    <div class="v-btn__content">
      <div>
        <p class="label text_14 text-gray-070">{{ label }}</p>
        <select class="value title_22" v-model="optionValue">
          <option v-for="(item, i) in options" :key="i" :value="i">{{ item.text }}</option>
        </select>
      </div>
      <v-icon class="open_black ml-auto"></v-icon>
    </div>
  </div>
  <v-btn v-else class="mt-3">
    <div>
      <p class="label text_14 text-gray-070">{{ label }}</p>
      <div class="value title_22">{{ text }}</div>
    </div>
    <v-icon class="open_black ml-auto"></v-icon>
  </v-btn>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/settings' as *;
body {
  .v-btn.v-btn--size-default {
    display: block;
    width: 100%;
    height: initial !important;
    padding: 0;
    border: 1px solid $gray-030;
    :deep(.v-btn__content) {
      padding: 1.2rem 1.6rem;
      align-items: flex-end;
      text-align: left;
      .label {
        padding: 0;
        font-weight: 400;
      }
      .value {
        margin-top: 0.6rem;
        font-weight: 400;
      }
      .v-icon {
        margin-bottom: 0.8rem;
      }
    }
    &.select {
      .v-btn__content {
        width: 100%;
        padding: 0;
        &>div {
          width: 100%;
        }
        .label {
          position: absolute;
          top: 1.2rem;
          left: 1.6rem;
        }
        .v-icon {
          position: absolute;
          right: 1.6rem;
          bottom: 1.2rem;
        }
        select {
          position: relative;
          display: block;
          width: 100%;
          margin-top: 0;
          padding: 3.8rem 1.6rem 1.2rem;
        }
      }
    }
  }
}
</style>