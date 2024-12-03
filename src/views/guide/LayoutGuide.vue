<script setup>
import SHeader from '@/views/pages/components/SHeader.vue';
import StepBar from '@/views/pages/components/StepBar.vue';
import BottomSheetSection from '@/views/pages/components/BottomSheetSection.vue';
import {ref, watch} from 'vue';
import Lottie01 from '@/assets/images/lottie/lottie_01.json'
const sheet01 = ref(false);
const step = ref(1)
const scrollTop = ref(0)
const ableNext = ref(false)
const nextStep = () => {
  if(step.value<7){
    step.value = step.value+1
  }
  ableNext.value = false
  scrollTop.value = 0
}
const beforeStep = () => {
  if(step.value>1){
    step.value = step.value-1
  }
  ableNext.value = false
  scrollTop.value = 0
}
const stepRef = ref(null)
watch(
  ()=>scrollTop.value,
  (newValue)=>{
    if(newValue>10){
      const el = stepRef.value[step.value-1].getBoundingClientRect()
      const elCont = document.querySelector('.dialog_container').getBoundingClientRect().height
      if(el.height - newValue < elCont) {
        ableNext.value = true
      }
    }
  }
)
const clickTitle = (target) => {
  const elCont = document.querySelector('.dialog_container').getBoundingClientRect()
  const panel = target.closest('.v-expansion-panel')
  let sibling = panel.previousElementSibling;
  while (sibling) {
    const isActivePanel = sibling.classList.contains('v-expansion-panel--active')
    if (isActivePanel) {
      const activePanelHeight = sibling.querySelector('.v-expansion-panel-text').getBoundingClientRect().height
      if(sibling.getBoundingClientRect().top < elCont.top){
        scrollTop.value = scrollTop.value - activePanelHeight
      }
    }
    sibling = sibling.previousElementSibling;
  }
}
// setTimeout(()=>{
//   const elCont = document.querySelector('.dialog_container').getBoundingClientRect()
//   const el = target.getBoundingClientRect()
//   if(el.top< elCont.top){
//     scrollTop.value = scrollTop.value + el.top - elCont.top
//   }
// },300)
</script>
<template>
  <SHeader/>
  <div class="container">
    <StepBar :value="3"></StepBar>
    <section class="section">
      <h1 class="title_22">.Section</h1>
      <div v-for="(item, i) in 1" :key="i">
        .container>.section
        <br/>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis veritatis numquam deleniti distinctio ad magnam aliquid blanditiis earum obcaecati ipsum natus, dolorum aperiam eius eligendi consequuntur. Asperiores numquam voluptates accusantium, dolorum deleniti perspiciatis? Deserunt repudiandae voluptate nostrum, debitis in nesciunt possimus velit aperiam tempore obcaecati explicabo veniam hic id ab, alias eligendi impedit libero enim numquam! Quasi, ut animi! Voluptatum vel cumque sit debitis. Distinctio, expedita! Esse accusantium repudiandae ab architecto reiciendis recusandae optio, ut accusamus, facilis laborum provident quos ratione modi sint temporibus similique mollitia inventore debitis animi vitae corrupti ducimus officiis nulla? Fugit officia culpa unde facere.
        </div>
          <v-bottom-sheet
          v-model="sheet01"
        >
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="primary">
              바틈시트 열기
            </v-btn>
          </template>
          <BottomSheetSection 
            :title="['타이틀 title type Array','타이틀 타이틀 타이틀 타이틀']"
            @close="sheet01 = false"
            @scroll="e => scrollTop = e"
            :scrollTop="scrollTop"
            ref="stepContRef"
            
            >
            <StepBar :value="step"></StepBar>
            <div ref="stepRef" v-for="(item, i) in 7" :key="i" >
              <div v-if="step === i+1" tabindex="0">
              {{ i+1 }}
              .dialog_container
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis veritatis numquam deleniti distinctio ad magnam aliquid blanditiis earum obcaecati ipsum natus, 
                dolorum aperiam eius eligendi consequuntur. Asperiores numquam voluptates accusantium, dolorum deleniti perspiciatis? Deserunt repudiandae voluptate nostrum, debitis in nesciunt possimus velit aperiam tempore obcaecati explicabo veniam hic id ab, alias eligendi impedit libero enim numquam! Quasi, ut animi! Voluptatum vel cumque sit debitis. Distinctio, 
                expedita! Esse accusantium repudiandae ab architecto reiciendis recusandae optio, ut accusamus, facilis laborum provident quos ratione modi sint temporibus similique mollitia inventore debitis animi vitae corrupti ducimus officiis nulla? Fugit officia culpa unde facere.
              <div v-if="i<3">
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel
                    v-for="i in 3"
                    :key="i"
                  >
                  <v-expansion-panel-title @click="clickTitle($event.target)">
                    Item Title {{ i }}
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div v-if="i>1">
                      {{i}}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    
                  </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
                
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis veritatis numquam deleniti distinctio ad magnam aliquid blanditiis earum obcaecati ipsum natus, 
              dolorum aperiam eius eligendi consequuntur. Asperiores numquam voluptates accusantium, dolorum deleniti perspiciatis? Deserunt repudiandae voluptate nostrum, debitis in nesciunt possimus velit aperiam tempore obcaecati explicabo veniam hic id ab, alias eligendi impedit libero enim numquam! Quasi, ut animi! Voluptatum vel cumque sit debitis. Distinctio, expedita! Esse accusantium repudiandae ab architecto reiciendis recusandae optio, ut accusamus, facilis laborum provident quos ratione modi sint temporibus similique mollitia inventore debitis animi vitae corrupti ducimus officiis nulla? Fugit officia culpa unde facere.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis veritatis numquam deleniti distinctio ad magnam aliquid blanditiis earum obcaecati ipsum natus, 
              dolorum aperiam eius eligendi consequuntur. Asperiores numquam voluptates accusantium, dolorum deleniti perspiciatis? Deserunt repudiandae voluptate nostrum, debitis in nesciunt possimus velit aperiam tempore obcaecati explicabo veniam hic id ab, alias eligendi impedit libero enim numquam! Quasi, ut animi! Voluptatum vel cumque sit debitis. Distinctio, expedita! Esse accusantium repudiandae ab architecto reiciendis recusandae optio, ut accusamus, facilis laborum provident quos ratione modi sint temporibus similique mollitia inventore debitis animi vitae corrupti ducimus officiis nulla? Fugit officia culpa unde facere.
            </div>
            </div>
            <template v-slot:action>
              <v-btn size="large" color="secondary" @click="beforeStep()">Large Button</v-btn>
              <v-btn size="large" color="primary" @click="nextStep()" :disabled="!ableNext">Large Button</v-btn>
            </template>
          </BottomSheetSection>
        </v-bottom-sheet>
      </div>
    </section>
    <section>
      <div v-for="item in 6" :key="item.id">
        .container>section 
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis veritatis numquam deleniti distinctio ad magnam aliquid blanditiis earum obcaecati ipsum natus, dolorum aperiam eius eligendi consequuntur. Asperiores numquam voluptates accusantium, dolorum deleniti perspiciatis? Deserunt repudiandae voluptate nostrum, debitis in nesciunt possimus velit aperiam tempore obcaecati explicabo veniam hic id ab, alias eligendi impedit libero enim numquam! Quasi, ut animi! Voluptatum vel cumque sit debitis. Distinctio, expedita! Esse accusantium repudiandae ab architecto reiciendis recusandae optio, ut accusamus, facilis laborum provident quos ratione modi sint temporibus similique mollitia inventore debitis animi vitae corrupti ducimus officiis nulla? Fugit officia culpa unde facere.
      </div>
    </section>
    <div class="footer_sticky">
      <v-btn-group class="large">
        <v-btn size="large" color="secondary">Large Button</v-btn>
        <v-btn size="large" color="primary">Large Button</v-btn>
      </v-btn-group>
      <p class="text_14 pb-3 mt-n1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, hic.</p>
    </div>
  </div>
</template>
<style lang="scss">
  .v-expansion-panels {
    &,* {
      transition: none !important;
    }
    .v-expansion-panel {
      border-radius: 0;
      &:after {
        opacity: 0;
      }
    }
    .v-expansion-panel-title__overlay,
    .v-expansion-panel__shadow {
      display: none;
    }
    .v-expansion-panel-title {
      min-height: initial !important;
      font-size: 1.6rem;
      line-height: 1.6rem !important;
      outline: 1px solid red;
    }
  } 
</style>