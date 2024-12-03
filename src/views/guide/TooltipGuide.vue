<script setup>
import Tooltip from '@/views/pages/components/Tooltip.vue';
import TooltipItem from '@/views/pages/components/TooltipItem.vue';
import ShowScreen from '@/views/pages/components/ShowScreen.vue';
</script>

<template>
  <div class="container">
    <section class="section">
      <h1 class="heading_36 mt-10">Tooltip</h1>
      <p class="title_22 my-5">Tooltip default</p>
      <Tooltip location="bottom left" title=" 타이틀">
        <v-icon size="small" class="question_gray" aria-label="도움말"></v-icon>
        <template v-slot:content>
          잔액기준  : 50만원<br>
          1일  : 100만원
        </template>
      </Tooltip>
      <p class="title_22 my-5">Tooltip dark</p>
      <Tooltip location="top left" type="dark" title=" 타이틀">
        <v-icon size="small" class="question_gray" aria-label="도움말"></v-icon>
        <template v-slot:content>
          잔액기준  : 50만원<br>
          1일  : 100만원
        </template>
      </Tooltip>
      <p class="title_22 my-5">Tooltip item default</p>
      <TooltipItem title=" 타이틀" class="top left">
        <slot name="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, molestias!
        </slot>
      </TooltipItem>
      <br/>
      <br/>
      <TooltipItem title=" 타이틀" class="top right">
        <slot name="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, molestias!
        </slot>
      </TooltipItem>
      <br/>
      <br/>
      <TooltipItem title=" 타이틀" class="top center">
        <slot name="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, molestias!
        </slot>
      </TooltipItem>
      <br/>
      <br/>
      <TooltipItem title=" 타이틀" class="bottom left">
        <slot name="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, molestias!
        </slot>
      </TooltipItem>
      <br/>
      <br/>
      <TooltipItem title=" 타이틀" class="bottom right">
        <slot name="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, molestias!
        </slot>
      </TooltipItem>
      <br/>
      <br/>
      <TooltipItem title=" 타이틀" class="bottom center">
        <slot name="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, molestias!
        </slot>
      </TooltipItem>
      <br/>
      <br/>
      <p class="title_22 my-5">Tooltip item dark hideClose</p>
      <TooltipItem title=" 타이틀" class="top left" type="dark" hideClose>
        <slot name="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, molestias!
        </slot>
      </TooltipItem>
      <br/>
      <br/>
      <p class="title_22 mt-5 mb-16">Tooltip item in ShowScreen</p>
      <ShowScreen :setTime="3000" style="width:60%" class="mx-auto">
        <TooltipItem class="top center" type="dark" hideClose>
          <slot name="content">
            Lorem ipsum dolor sit amet 
            <br/>
            consectetur adipisicing elit. Et, saepe.
          </slot>
        </TooltipItem>
      </ShowScreen>
    </section>
  </div>
</template>
