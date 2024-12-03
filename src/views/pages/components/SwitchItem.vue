<script setup>
import { ref, defineProps ,computed, defineEmits, onMounted } from 'vue';
const switchLabel = ref(null);
const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  }
})
const emit = defineEmits(['update:modelValue']);

const switchValue = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit('update:modelValue', value);
    updateSwitchLabel(value);
  },
});

function updateSwitchLabel(val) {
  switchLabel.value = val ? '신청' : '미신청';
}

onMounted(() => {
  updateSwitchLabel(props.value);
});

</script>
<template>
  <div class="swich_item mt-3" :class="{on:switchValue}">
    <p class="label">{{ label }}</p>
    <v-switch
      v-model="switchValue"
      :label="switchLabel"
      hide-details
      inset
    ></v-switch>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/settings' as *;

.swich_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.6rem;
  border: 1px solid $gray-040;
  border-radius: 0.8rem;
  color: $gray-080;
  .label {
    @extend .text_16;
    font-weight: bold;
  }
  &.on {
    color: $black;
  }
}
</style>