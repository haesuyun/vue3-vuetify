<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const showRef = ref(null);
const props = defineProps({
  setTime: {
    type: Number,
  }
})
// onMounted(() => {
//   const elem = showRef.value;
//   observe.observe(elem);
// });
// const observe = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     const $target = entry.target;
//     if (entry.isIntersecting) {
//       $target.classList.add("on");
//       if (props.setTime>0){
//         let timeoutId = null;
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(()=>{
//           $target.classList.remove("on");
//         },props.setTime)
//       }
//     } else {
//       $target.classList.remove("on");
//     }
//   });
// });

const checkVisibility = () => {
  const elem = showRef.value;
  if (!elem) return;

  const rect = elem.getBoundingClientRect();
  const isVisible = rect.top >= 0 
  && rect.left >= 0 
  && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
  && rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  if (isVisible) {
    elem.classList.add("on");
    if (props.setTime > 0) {
      let timeoutId = null;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        elem.classList.remove("on");
      }, props.setTime);
    }
  } else {
    elem.classList.remove("on");
  }
};

const onScroll = () => {
  checkVisibility();
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  checkVisibility(); // 초기 로드 시에도 체크
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>
<template>
  <div ref="showRef" class="show_screen">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.show_screen {
  position: relative;
  display: block !important;
}
</style>