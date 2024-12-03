<script setup>
import SHeader from '@/views/pages/components/SHeader.vue';
import RadioGroup from '@/views/pages/components/RadioGroup.vue';
import SwitchItem from '@/views/pages/components/SwitchItem.vue';
import { ref, computed, watch } from 'vue';
const input01 = ref(null);
const switch01 = ref(true);
const checkbox01 = ref(true);
const checkbox02 = ref(true);
const checkbox03 = ref(false);
const radioGroup01 = ref({
  value: null,
  items: [
    {
      text: 'option1',
    },
    {
      text: `option2 <br/>~ option3`,
    },
    {
      text: `option4 <br/>~ option5`,
    },
    {
      text: 'option6',
    },
  ]
})
const radioGroup02 = ref({
  value: null,
  items:[
    {
      text: 'Text1',
    },
    {
      text: 'Text2',
    },
  ]
})
const radioGroup03 = ref({
  value: null,
  items:[
    {
      text: 'option1',
    },
    {
      text: 'option2',
    },
    {
      text: 'option3',
    },
    {
      text: 'option4',
    },
    {
      text: 'option5',
    },
    {
      text: 'option6',
    },
  ]
})
const radioGroup04 = ref({
  value: null,
  items:[
    {
      icon: 'mastercard',
      text: 'option1',
      info: '18,000원'
    },
    {
      text: 'option2',
      info: '15,000원'
    },
  ]
})
</script>
<template>
  <SHeader/>
  <div class="container">
    <section class="section">
      <h1 class="heading_36 mt-10">Form</h1>
      <v-container>
        <h1 class="title_24 mt-10 mb-5">input</h1>
        <v-row>
          <v-col cols="12">
            <div class="input_item">
              <v-text-field
                v-model="input01"
                label="이름"
                placeholder="실명 입력 (최대 7자)"
                persistent-hint
                hint="여권 이름과 일치하지 않으면 해외에서 사용할 수 없어요!"
                hide-details="auto"
                clearable
              >
              </v-text-field>
            </div>
            <div class="input_item">
              <v-text-field
                  v-model="input01"
                  label="이름"
                  placeholder="실명 입력 (최대 7자)"
                  persistent-hint
                  hint="여권 이름과 일치하지 않으면 해외에서 사용할 수 없어요!"
                  hide-details="auto"
                  clearable
                  class="mt-4"
                >
                <template v-slot:label>
                  이름
                  <button type="button" class="ml-1" aria-label="도움말">
                    <v-icon size="small" class="question_gray" aria-hidden="false"></v-icon>
                  </button>
                </template>
                <template v-slot:append-inner>
                  <v-btn size="x-small" color="tertiary">영문전환</v-btn>
                </template>
              </v-text-field>
            </div>
          </v-col>
        </v-row>
        <h1 class="title_24 mt-10 mb-5">switch</h1>
        <v-row>
          <v-col cols="12">
            <v-switch
              v-model="switch01"
              label="텍스트"
              hide-details
              inset
            ></v-switch>
          </v-col>
          <v-col cols="12">
            <SwitchItem :value="switch01" @update:modelValue="switch01 = $event" label="신청 여부"></SwitchItem>
          </v-col>
        </v-row>
        <h1 class="title_24 mt-10 mb-5">checkbox</h1>
        <v-row>
          <v-col cols="12">
            <v-checkbox
              v-model="checkbox01"
              hide-details
              ></v-checkbox>
            <v-checkbox
              v-model="checkbox02"
              label="텍스트"
              disabled
              hide-details
              ></v-checkbox>
            <v-checkbox
              v-model="checkbox03"
              label="텍스트"
              disabled
              hide-details
              ></v-checkbox>
              <br/>
              <br/>
            <v-checkbox
              v-model="checkbox01"
              hide-details
              >
              <template v-slot:label>
                <span class="text_14">텍스트 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore.</span>
              </template>
              </v-checkbox>
          </v-col>
          <v-col cols="12" class="mt-10">
            <v-checkbox
              v-model="checkbox01"
              class="small"
              hide-details
              ></v-checkbox>
              <v-checkbox
              v-model="checkbox02"
              class="small"
              label="텍스트"
              disabled
              hide-details
              ></v-checkbox>
              <v-checkbox
              v-model="checkbox03"
              class="small"
              label="텍스트"
              disabled
              hide-details
              ></v-checkbox>
              <br/>
              <br/>
              <v-checkbox
              v-model="checkbox01"
              class="small"
              hide-details
              >
              <template v-slot:label>
                <span class="text_14">텍스트 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore.</span>
              </template>
              </v-checkbox>
          </v-col>
        </v-row>
        <h1 class="title_24 mt-10 mb-5">radio group</h1>
        <v-row>
          <v-col cols="12">
            <RadioGroup v-model="radioGroup01.value" :items="radioGroup01.items">
              Title
            </RadioGroup>
          </v-col>
          <v-col cols="12" class="mt-10">
            <RadioGroup v-model="radioGroup02.value" :items="radioGroup02.items">
              Title
            </RadioGroup>
          </v-col>
          <v-col cols="12 mt-10">
            <RadioGroup v-model="radioGroup03.value" :items="radioGroup03.items">
              Title
            </RadioGroup>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<style lang="scss" scoped></style>
