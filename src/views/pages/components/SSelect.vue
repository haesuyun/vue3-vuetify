<script setup>
import SelectItem from '@/views/pages/components/SelectItem.vue';
import BottomSheetSection from '@/views/pages/components/BottomSheetSection.vue';
import { ref, defineProps, computed, defineEmits, onMounted, nextTick } from 'vue';
const sheet = ref(false); 
const sheet01 = ref(false); 
const isMobile = ref(false); 

const props = defineProps({
  label: {
    type: String,
  },
  optionTitle: {
    type: Array,
  },
  options: {
    type: Array,
    default: () => [],
  },
  selectValue: {
    type: Number,
    default: 0,
  },
})
const emit = defineEmits(['update']);
const optionValue = computed({
  get() {
    return props.selectValue;
  },
  set(value) {
    emit('update', value);
  },
});
const menuRef = ref(null);
function clickOption(val){
  if(val){
    optionValue.value = val
  }
  sheet.value = false
  sheet01.value = false
  const menuEl = menuRef.value.$el;
  console.log(menuEl.nextElementSibling)
  menuEl.nextElementSibling.querySelector('.v-btn').focus()
}
const selectRef = ref(null)
onMounted(()=>{
  if(window.navigator.maxTouchPoints){
    isMobile.value = true;
  }else{
    isMobile.value = false;
  }
  console.log(selectRef.value.querySelector('.v-btn'))
  selectRef.value.querySelector('.v-btn').focus()
})

</script>
<template>
  <!-- <v-menu v-model="sheet01" ref="menuRef" :open-on-click="true" close-on-content-click :open-on-focus="false">
    <template v-slot:activator="{ props }">
      <div ref="selectRef">
        <SelectItem
        v-bind="props"    
        :label="label"
        :text="options[optionValue].text"
        ></SelectItem>
      </div>
    </template>
    <BottomSheetSection 
      :title="optionTitle"
      hideAction
      @close="clickOption()"
      >
      <v-list>
        <v-list-item
          v-for="(item, i) in options"
          :key="i"
          :value="i"
          @click="clickOption(i)"
          >
            <p v-html="item.text" class="label text_16"></p>
            <v-icon v-if="optionValue === i" class="checked_blue"></v-icon>
        </v-list-item>
      </v-list>
    </BottomSheetSection>
  </v-menu> -->
  <!-- mobile -->
  <SelectItem 
    v-if="isMobile"
    :value="optionValue"
    @update:modelValue="optionValue = $event"
    :options="options"
    :label="label" 
    :text="options[optionValue].text" 
  ></SelectItem>
  <!-- pc -->
  <v-bottom-sheet
    v-else
    v-model="sheet"
  >
    <template v-slot:activator="{ props }">
      <SelectItem v-bind="props" :label="label" :text="options[optionValue].text"></SelectItem>
    </template>
    <BottomSheetSection 
      :title="optionTitle"
      hideAction
      @close="sheet = false"
      >
      <v-list>
        <v-list-item
          v-for="(item, i) in options"
          :key="i"
          :value="i"
          @click="clickOption(i)"
          >
            <p v-html="item.text" class="label text_16"></p>
            <v-icon v-if="optionValue === i" class="checked_blue"></v-icon>
        </v-list-item>
      </v-list>
    </BottomSheetSection>
  </v-bottom-sheet>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/settings' as *;

.v-list {
  padding: 0;
  .v-list-item {
    position: relative;
    cursor: pointer;
    padding: 0;
    min-height: inherit;
    & + .v-list-item {
      margin-top: 2rem;
    }
    :deep(.v-list-item__content) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 3.2rem;
      padding: 0 0.4rem;
      border-radius: .8rem;
      color: $black;
      opacity: 1;
      .label {
        margin-right: auto;
      }
    }
    .v-list-item-icon {
      display: none;
    }
    :deep(.v-list-item__overlay) {
      border-radius: .8rem;
    }
    &.v-list-item--active {
      :deep(.v-list-item__content) {
        font-weight: bold;
        color: $primary;
        opacity: 1;
        .v-list-item-icon {
          display: block;
        }
      }
      :deep(.v-list-item__overlay) {
        display: none;
      }
    }
  }
}
</style>
<style>
.v-overlay__content {
  background: #fff;
}
</style>