<script setup>
const content = {
  heading: [36,32,30,28,26],
  title: [24, 22, 20, 18, 16, 14, 13],
  text: [18, 16, 14, 13, 12, 11, 10],
  button: [16, 14, 12, 11, 10]
}

</script> 
<template>
  <div class="container">
    <section class="section">
      <h1 class="heading_36 mt-10">Typography</h1>
      <h2 class="title_22 my-5">Font Size</h2>
      <template v-for="(value, key) in content" :key="key">
        <template v-if="key == 'heading'">
          <div v-for="item in value" :key="item" :class="`${key}_${item}`">.{{ `${key}_${item}` }}</div>
        </template>
        <template v-else-if="key == 'title'">
          <div v-for="item in value" :key="item" :class="`${key}_${item}`">.{{ `${key}_${item}` }}</div>
        </template>
        <template v-else-if="key == 'text'">
          <div v-for="item in value" :key="item" :class="`${key}_${item}`">.{{ `${key}_${item}` }}</div>
        </template>
        <template v-else>
          <button type="button" v-for="item in value" :key="item" :class="`${key}_${item}`" :style="{display: 'block'}">.{{ `${key}_${item}` }}</button>
        </template>
      </template>
    </section>
    <section class="section mt-10">
      <h2 class="title_22 my-5">Font Weight</h2>
      <div class="title_16 font-weight-bold"> .font-weight-bold 700</div>
      <div class="title_16 font-weight-medium"> .font-weight-medium 500</div>
      <div class="title_16 font-weight-regular"> .font-weight-regular 400</div>
      <div class="title_16 font-weight-light"> .font-weight-light 300</div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
</style>
