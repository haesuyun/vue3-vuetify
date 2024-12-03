<script setup>
import { ref, computed } from 'vue';
import AgreementItem from '@/views/pages/components/AgreementItem.vue';
import { useDisplay } from 'vuetify';
const { mdAndUp } = useDisplay()

const agreementItems = ref([
  {
    value: false,
    label: 'depth01:개인(신용)정보 필수적 동의',
    items: [
      { label: 'depth02:개인(신용)정보 필수적 동의' },
      { label: 'depth02:개인(신용)정보 필수적 동의' },
      { label: 'depth02:개인(신용)정보 필수적 동의' },
    ],
  },
  {
    value: false,
    label: 'depth01:개인(신용)정보 필수적 동의',
    items: [
      { label: 'depth02:개인(신용)정보 필수적 동의' },
      { label: 'depth02:개인(신용)정보 필수적 동의' },
      { label: 'depth02:개인(신용)정보 필수적 동의' },
    ],
  },
  {
    value: false,
    label: 'depth01:개인(신용)정보 필수적 동의',
    items: [
      { label: 'depth02:개인(신용)정보 필수적 동의' },
      { label: 'depth02:개인(신용)정보 필수적 동의' },
      { label: 'depth02:개인(신용)정보 필수적 동의' },
    ],
  },
  {
    value: false,
    label: 'depth01:개인(신용)정보 필수적 동의',
    items: [
      { label: 'depth02:개인(신용)정보 필수적 동의' },
      { label: 'depth02:개인(신용)정보 필수적 동의' },
      { label: 'depth02:개인(신용)정보 필수적 동의' },
    ],
  },
]);

const allChecked = computed({
  get() {
    return agreementItems.value.every((item) => item.value);
  },
  set(value) {
    agreementItems.value.forEach((item) => (item.value = value));
  },
});
</script>
<template>
  <div class="container">
    <section class="section">
      <v-container>
        <h1 class="heading_36 mt-10 mb-5">Agreement</h1>
        <div class="agreement_wrap hide_pc" :class="[mdAndUp?'px-10':'px-0']">
          <v-checkbox
          v-model="allChecked"
          label="전체 동의 합니다"
          hide-details
          ></v-checkbox>
          <AgreementItem 
          v-model="item.value"
          v-for="(item, i) in agreementItems"
          :key="i"
          :item="item"/>
        </div>
        <v-btn-group class="large">
          <v-btn color="primary" :disabled="!allChecked">확인</v-btn>
        </v-btn-group>
      </v-container>
    </section>
  </div>
</template>

<style></style>