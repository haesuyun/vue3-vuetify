<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  value: {
    type: String,
  }
})

const emit = defineEmits(['update:modelValue']);

const radioValue = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const setClass = computed(()=>{
  let val = null;
  if(props.items.length>3){
    val = 'row_2';
  }
  if(props.items.length % 3 === 0 && props.items.length !== 0){
    val += ' col_4'
  }
  return val;
})

</script>
<template>
  <v-radio-group v-model="radioValue" class="type_button mt-6" hide-details>
    <template v-slot:label>
      <div><slot></slot></div>
    </template>
    <v-radio :value="i" v-for="(item,i) in items" :key="i" :class="setClass">
      <template v-slot:label>
        <div class="radio_button">
          <p>
            <v-icon v-if="item.icon" :class="item.icon"></v-icon>
            <span v-html="item.text"></span>
          </p>
          <div v-if="item.info">{{ item.info }}</div>
        </div>
      </template>
    </v-radio>
  </v-radio-group>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/settings' as *;

.v-radio-group.type_button {
  position: relative;
  :deep(.v-input__control>.v-label) {
    overflow: visible;
    margin-left: 0;
    @extend .text_14;
    color: $gray-070;
    opacity: 1;
    div {
      display: flex;
      align-items: center;
    }
  }
  :deep(.v-selection-control-group) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0.3rem -0.4rem -0.3rem !important;
    padding-inline-start: 0 !important;
    .v-radio {
      flex: 1 1 40%;
      min-width: 40%;
      position: relative;
      margin: 0.3rem 0.4rem;
      &.col_4 {
        flex: 1 1 30%;
        min-width: 30%;
      }
      @media (min-width: 1100px) {
        &.row_2 {
          flex: 1 1 auto;
          min-width: 10%;
        }
      }
      // icon
      .v-selection-control__wrapper {
        overflow: hidden;
        position:absolute;
        width: 0;
        height: 0;
        z-index: -1;
      }
      .v-label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 4.8rem;
        padding: 0 0.4rem;
        border: 1px solid $gray-040;
        border-radius: .8rem;
        color: $dark-gray-700;
        opacity: 1;
        @media (min-width:1100px) {
          padding: 0 1.2rem;
        }
      }
      // selected
      &.v-selection-control--dirty {
        .v-label {
          border: 1px solid $dark-gray-700 !important;
          color:$black;
          box-shadow: 0 4px 4px 0 rgba($black, 10%);
          .radio_button {
            min-height: 100%;
          }
        }
      }
    }
  }
  .radio_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1.6rem 0;
    p {
      @extend .button_14;
      font-weight: bold;
      color: $black;
      display: flex;
      justify-content: center;
      span {
        display: inline-block;
        text-align: center;
      }
    }
    p + div {
      @extend .button_14;
      margin-top: .8rem;
    }
    @media (min-width: 1100px) {
      flex-direction: row;
      p + div {
        margin-top: 0;
        margin-left: auto;
      }
    }
  }
}
</style>