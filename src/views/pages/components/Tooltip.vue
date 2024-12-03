<script setup>
import TooltipItem from '@/views/pages/components/TooltipItem.vue'
import { ref, defineProps } from 'vue';

const show = ref(false);
const tooltipButtonRef = ref(null);
const tooltipContentRef = ref(null);
const props = defineProps({
  location: {
    type: String,
    default: 'bottom center'
  },
  type: {
    type: String,
  },
  title: {
    type: String,
  }
})

function handleTooltip() {
  let timeoutId = null;
  clearTimeout(timeoutId);
  timeoutId = setTimeout(()=>{
    tooltipContentRef.value.focus();
  },100)
}
function closeTooltip(){  
  show.value = false;
  tooltipButtonRef.value.focus();
}
</script>
<template>
  <v-tooltip
    v-model="show"
    :location="location"
    content-class="tooltip_content"
    scroll-strategy="none"
    :open-on-click="true"
    :open-on-hover="false"
    :open-on-focus="false"
    >
    <template v-slot:activator="{ props }">
      <button 
        type="button" 
        v-bind="props"
        ref="tooltipButtonRef" 
        @click="handleTooltip()"
        >
        <slot></slot>
      </button>
    </template>
    <div ref="tooltipContentRef" tabindex="-1" class="tooltip_content_inner">
      <TooltipItem @close="closeTooltip" :title="title" :class="location" :type="type">
        <slot name="content"></slot>
      </TooltipItem>
    </div>
  </v-tooltip>    
</template>
<style lang="scss" scoped>
@use '@/assets/scss/settings' as *;
:deep(.tooltip_content) {
  padding: 0;
  background-color: transparent;
}
.tooltip_content_inner {
  margin-left: 0.8rem;
  margin-right: 0.8rem;
}
</style>