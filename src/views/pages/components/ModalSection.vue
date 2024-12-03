<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: {
    type: Array,
  },
  hideAction: {
    type: Boolean,
    default: false,
  },
  closeBtn: {
    type: Boolean,
    default: false,
  }
})
const emit = defineEmits(['close']);
function handleClose() {
  emit('close');
}
</script>
<template>
  <section class="dialog_section">
    <div class="dialog_header" v-if="title">
      <h1>
        <span v-for="(item, i) in title" :key="i" class="pr-1">{{ item }}</span>
      </h1>
      <button v-if="closeBtn" @click="handleClose" aria-label="닫기">
        <v-icon class="close_black"></v-icon>
      </button>
    </div>
    <div class="dialog_container">
      <slot></slot>
    </div>
    <div v-if="!hideAction" class="dialog_footer">
      <v-btn-group class="large">
        <slot name="action"></slot>
      </v-btn-group>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/settings' as *;
.dialog_section {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  background-color: $white;
  .dialog_header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    h1 {
      font-size: 1.8rem;
      span {
        display: inline-block;
        @media (max-width:320px) {
          display: inline;
        }
      }
    }
    & + .dialog_container {
      padding-top: 1.2rem;
      font-size: 1.4rem;
    }
  }
  .dialog_container {
    overflow-y: auto;
  }
  .dialog_footer {
    width: 100%;
    display: flex;
  }
}
</style>

<style lang="scss">
@use '@/assets/scss/settings' as *;
body {
  .v-overlay-container {
    .v-dialog {
      &.popup {
        .v-overlay__content {
          max-height: calc(100% - 200px);
          align-items: center;
          .dialog_section {
            width: 100%;
            max-width: 36rem;
            border-radius: 1.6rem;
            .dialog_header {
              padding: 3.2rem 3.2rem 0;
              & + .dialog_container {
                padding-top: 1.2rem;
                font-size: 1.4rem;
              }
            }
            .dialog_container {
              width: 100%;
              padding: 3.2rem;
              font-size: 1.6rem;
            }
            .dialog_footer {
              .v-btn-group {
                margin: 0;
              }
            }
          }
        }
        &.mo_full {
          .v-overlay__content {
            .dialog_section {
              max-width: none;
            }
          }
        }
      }
      &.full {
        .v-overlay__content {
          width: 100vw;
          height: 100vh;
          max-width: none;
          max-height: none;
          .dialog_section {
            width: 100vw;
            .dialog_header {
              justify-content: space-between;
              padding: 2.4rem 2.4rem 0.9rem;
              h1 {
                @extend .title_18;
                @media (min-width:1100px) {
                  font-size: 2.4rem;
                }
              }
              & + .dialog_container {
                padding-top: 1.2rem;
                font-size: 1.4rem;
              }
            }
            .dialog_container {
              width: 100%;
              flex: 1 1 auto;
              padding: 2.4rem 2.4rem 4rem;
              @media (min-width:1100px) {
              }
            }
            .dialog_footer {
              .v-btn-group {
                padding: 0 1.6rem;
              }
            }
          }
        }
      }
      &.popup {
        .dialog_section {
          .dialog_footer {
            .v-btn-group {
              .v-btn {
                font-size: 1.6rem;
                height: 5.2rem !important;
                border-radius: 0 !important;
                border-top: 1px solid $gray-030;
                & + .v-btn {
                  margin-left: 0;
                  border-left: 1px solid $gray-030;
                }
                &.bg-primary {
                  color: $primary !important;
                  background-color: $white !important;
                }
                &.bg-secondary {
                  color: $gray-080 !important;
                  background-color: $white !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>