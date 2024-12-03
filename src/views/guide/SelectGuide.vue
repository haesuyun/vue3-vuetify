<script setup>
import SHeader from '@/views/pages/components/SHeader.vue';
import SelectItem from '@/views/pages/components/SelectItem.vue';
import BottomSheetSection from '@/views/pages/components/BottomSheetSection.vue';
import SSelect from '@/views/pages/components/SSelect.vue';
import {ref} from 'vue';
const sheet01 = ref(false);
const select01 = ref({
  label: '이름',
  value: 1,
  optionTitle: ['Lorem ipsum dolor sit amet','consectetur adipisicing elit. Ab, saepe.'],
  options: [
    {
      text: '0 KIM SHINHAN',
    },
    {
      text: '1 JANG SHINHAN',
    },
    {
      text: '2 HONG SHINHAN',
    },
    {
      text: '직접입력',
    },
  ],
})
</script>
<template>
  <SHeader></SHeader>
  <div class="container">
    <section class="section">
      <h1 class="heading_36 mt-10">Select</h1>
      <p class="title_16 mt-10 mb-5">버튼 유형</p>
      <SelectItem label="OPTION0" text="OPTION01"></SelectItem>
      <p class="title_16 mt-10 mb-5">바텀시트 변형 유형</p>
      <v-bottom-sheet
        v-model="sheet01"
      >
        <template v-slot:activator="{ props }">
          <SelectItem v-bind="props" label="OPTION0" text="OPTION01"></SelectItem>
        </template>
        <BottomSheetSection 
        :title="['Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, saepe.']"
        @close="sheet01 = false">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, saepe.
          <template v-slot:action>
            <v-btn size="large" color="secondary" @click="sheet01 = false">Large Button</v-btn>
            <v-btn size="large" color="primary" @click="sheet01 = false">Large Button</v-btn>
          </template>
        </BottomSheetSection>
      </v-bottom-sheet>
      <p class="title_16 mt-10 mb-5">기본 옵션 유형</p>
      <SSelect 
        :label="select01.label" 
        :selectValue="select01.value"
        @update="select01.value = $event"
        :optionTitle="select01.optionTitle"
        :options="select01.options"
      ></SSelect>
      <br/>
      <br/>
      <br/>
    </section>
  </div>
</template>
<style lang="scss" scoped>
</style>