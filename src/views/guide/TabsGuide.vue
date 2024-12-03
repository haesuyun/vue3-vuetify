<script setup>
import { ref } from 'vue';
const tab1 = ref(null),
      tab2 = ref(null),
      tab3 = ref(null),
      tab4 = ref(null);
</script>
<template>
  <div class="container">
    <section>
      <h1 class="heading_36 mt-10">Tabs</h1>
      <h2>Default</h2>
      <v-tabs
        v-model="tab1"
      >
        <v-tab value="one" class="title_18">탭이름</v-tab>
        <v-tab value="two" class="title_18">탭이름</v-tab>
        <v-tab value="three" class="title_18">탭이름</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab1">
        <v-tabs-window-item value="one">
          TAB-CONTENT1
        </v-tabs-window-item>
        <v-tabs-window-item value="two">
          TAB-CONTENT2
        </v-tabs-window-item>
        <v-tabs-window-item value="three">
          TAB-CONTENT3
        </v-tabs-window-item>
      </v-tabs-window>
      <v-divider></v-divider>
      <h2>GROW</h2>
      <v-tabs
        v-model="tab2"
        grow
      >
        <v-tab value="one" class="title_18">TAB-1</v-tab>
        <v-tab value="two" class="title_18">TAB-2</v-tab>
        <v-tab value="three" class="title_18">TAB-3</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab2">
        <v-tabs-window-item value="one">
          TAB-CONTENT1
        </v-tabs-window-item>
        <v-tabs-window-item value="two">
          TAB-CONTENT2
        </v-tabs-window-item>
        <v-tabs-window-item value="three">
          TAB-CONTENT3
        </v-tabs-window-item>
      </v-tabs-window>
      <v-divider></v-divider>
      <h2>CENTER</h2>
      <v-tabs
        v-model="tab3"
        align-tabs="center"
      >
        <v-tab value="one" class="title_18">TAB-1</v-tab>
        <v-tab value="two" class="title_18">TAB-2</v-tab>
        <v-tab value="three" class="title_18">TAB-3</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab3">
        <v-tabs-window-item value="one">
          TAB-CONTENT1
        </v-tabs-window-item>
        <v-tabs-window-item value="two">
          TAB-CONTENT2
        </v-tabs-window-item>
        <v-tabs-window-item value="three">
          TAB-CONTENT3
        </v-tabs-window-item>
      </v-tabs-window>
      <v-divider></v-divider>
      <h2>UNDERLINE</h2>
      <v-tabs
        v-model="tab4"
        :show-arrows="false"
        :prev-icon="null"
        :next-icon="null"
        class="underline"
      >
        <v-tab value="one" class="title_18">TAB-1</v-tab>
        <v-tab value="two" class="title_18">TAB-2</v-tab>
        <v-tab value="three" class="title_18">TAB-3</v-tab>
        <v-tab value="four" class="title_18">TAB-4</v-tab>
        <v-tab value="five" class="title_18">TAB-5</v-tab>
        <v-tab value="six" class="title_18">TAB-6</v-tab>
        <v-tab value="sevent" class="title_18">TAB-7</v-tab>
        <v-tab value="eight" class="title_18">TAB-8</v-tab>
        <v-tab value="nine" class="title_18">TAB-9</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab4">
        <v-tabs-window-item value="one">
          TAB-CONTENT1
        </v-tabs-window-item>
        <v-tabs-window-item value="two">
          TAB-CONTENT2
        </v-tabs-window-item>
        <v-tabs-window-item value="three">
          TAB-CONTENT3
        </v-tabs-window-item>
      </v-tabs-window>
    </section>
  </div>
</template>
<style lang="scss" scoped>
h1 {
  padding: 0 2.4rem;
}
h2 {
  padding: 4rem 2.4rem;
}
</style>