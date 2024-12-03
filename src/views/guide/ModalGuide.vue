<script setup>
import { ref, onMounted, onUnmounted, h } from 'vue';
import ModalSection from '@/views/pages/components/ModalSection.vue';

import { useDisplay } from 'vuetify';
const { mdAndUp } = useDisplay()

const dialog01 = ref(false);
const dialog02 = ref(false);

</script>

<template>
  <div class="container">
    <section class="section">
      <v-container>
        <h1 class="heading_36 mt-10">Modal</h1>
        <h2 class="title_24 mt-10 mb-5">Alert</h2>
        <v-dialog 
          class="popup"
          transition="dialog-transition"
        >
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="primary">
              Alert 열기
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <ModalSection 
              :title="['타이틀 title type Array']"
            >
              이용에 동의하지 않았어요. <br />
              동의 후 신청해주세요.
              <template v-slot:action>
                <v-btn color="secondary" @click="isActive.value = false">닫기</v-btn>
              </template>
            </ModalSection>
          </template>
        </v-dialog>

        <h2 class="title_24 mt-10 mb-5">Alert (no title)</h2>
        <v-dialog
          class="popup"
          transition="dialog-transition"
        >
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="primary">
              Alert 열기
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <ModalSection>
              이용에 동의하지 않았어요. <br />
              동의 후 신청해주세요.
              <template v-slot:action>
                <v-btn color="secondary" @click="isActive.value = false">닫기</v-btn>
              </template>
            </ModalSection>
          </template>
        </v-dialog>

        <h2 class="title_24 mt-10 mb-5">Confirm</h2>
        <v-dialog 
          class="popup"
          transition="dialog-transition"
        >
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="primary">
              Confirm 열기
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <ModalSection 
              :title="['타이틀 title type Array']"
            >
              이용에 동의하지 않았어요. <br />
              동의 후 신청해주세요.
              <template v-slot:action>
                <v-btn color="secondary" @click="isActive.value = false">취소</v-btn>
                <v-btn color="primary" @click="isActive.value = false">확인</v-btn>
              </template>
            </ModalSection>
          </template>
        </v-dialog>

        <h2 class="title_24 mt-10 mb-5">Confirm (no title)</h2>
        <v-dialog 
          class="popup"
          transition="dialog-transition"
        >
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="primary">
              Confirm 열기
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <ModalSection>
              이용에 동의하지 않았어요. <br />
              동의 후 신청해주세요.
              <template v-slot:action>
                <v-btn color="secondary" @click="isActive.value = false">취소</v-btn>
                <v-btn color="primary" @click="isActive.value = false">확인</v-btn>
              </template>
            </ModalSection>
          </template>
        </v-dialog>

        <h2 class="title_24 mt-10 mb-5">Full popup</h2>
        <v-dialog
          v-model="dialog01"
          transition="dialog-bottom-transition"
          :class="[mdAndUp?'popup':'full']"
          class="mo_full"
          :maxWidth="600"
        >
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="primary">
              Full popup 열기
            </v-btn>
          </template>

          <ModalSection
            :title="['타이틀 title type Array']"
            closeBtn
            @close="dialog01 = false"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis veritatis numquam deleniti distinctio ad magnam aliquid blanditiis earum obcaecati ipsum natus, dolorum aperiam eius eligendi consequuntur. Asperiores numquam voluptates accusantium, dolorum deleniti perspiciatis? Deserunt repudiandae voluptate nostrum, debitis in nesciunt possimus velit aperiam tempore obcaecati explicabo veniam hic id ab, alias eligendi impedit libero enim numquam! Quasi, ut animi! Voluptatum vel cumque sit debitis. Distinctio, expedita! Esse accusantium repudiandae ab architecto reiciendis recusandae optio, ut accusamus, facilis laborum provident quos ratione modi sint temporibus similique mollitia inventore debitis animi vitae corrupti ducimus officiis nulla? Fugit officia culpa unde facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis veritatis numquam deleniti distinctio ad magnam aliquid blanditiis earum obcaecati ipsum natus, dolorum aperiam eius eligendi consequuntur. Asperiores numquam voluptates accusantium, dolorum deleniti perspiciatis? Deserunt repudiandae voluptate nostrum, debitis in nesciunt possimus velit aperiam tempore obcaecati explicabo veniam hic id ab, alias eligendi impedit libero enim numquam! Quasi, ut animi! Voluptatum vel cumque sit debitis. Distinctio, expedita! Esse accusantium repudiandae ab architecto reiciendis recusandae optio, ut accusamus, facilis laborum provident quos ratione modi sint temporibus similique mollitia inventore debitis animi vitae corrupti ducimus officiis nulla? Fugit officia culpa unde facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis veritatis numquam deleniti distinctio ad magnam aliquid blanditiis earum obcaecati ipsum natus, dolorum aperiam eius eligendi consequuntur. Asperiores numquam voluptates accusantium, dolorum deleniti perspiciatis? Deserunt repudiandae voluptate nostrum, debitis in nesciunt possimus velit aperiam tempore obcaecati explicabo veniam hic id ab, alias eligendi impedit libero enim numquam! Quasi, ut animi! Voluptatum vel cumque sit debitis. Distinctio, expedita! Esse accusantium repudiandae ab architecto reiciendis recusandae optio, ut accusamus, facilis laborum provident quos ratione modi sint temporibus similique mollitia inventore debitis animi vitae corrupti ducimus officiis nulla? Fugit officia culpa unde facere.
            <template v-slot:action>
              <v-btn color="secondary" @click="dialog01 = false">닫기</v-btn>
            </template>
          </ModalSection>
        </v-dialog>

        <h2 class="title_24 mt-10 mb-5">Full popup (hide action)</h2>
        <v-dialog
          v-model="dialog02"
          transition="dialog-bottom-transition"
          :class="[mdAndUp?'popup':'full']"
          class="mo_full"
        >
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="primary">
              Full popup 열기
            </v-btn>
          </template>

          <ModalSection
            :title="['타이틀 title type Array']"
            @close="dialog02 = false"
            closeBtn
            hideAction
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis veritatis numquam deleniti distinctio ad magnam aliquid blanditiis earum obcaecati ipsum natus, dolorum aperiam eius eligendi consequuntur. Asperiores numquam voluptates accusantium, dolorum deleniti perspiciatis? Deserunt repudiandae voluptate nostrum, debitis in nesciunt possimus velit aperiam tempore obcaecati explicabo veniam hic id ab, alias eligendi impedit libero enim numquam! Quasi, ut animi! Voluptatum vel cumque sit debitis. Distinctio, expedita! Esse accusantium repudiandae ab architecto reiciendis recusandae optio, ut accusamus, facilis laborum provident quos ratione modi sint temporibus similique mollitia inventore debitis animi vitae corrupti ducimus officiis nulla? Fugit officia culpa unde facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis veritatis numquam deleniti distinctio ad magnam aliquid blanditiis earum obcaecati ipsum natus, dolorum aperiam eius eligendi consequuntur. Asperiores numquam voluptates accusantium, dolorum deleniti perspiciatis? Deserunt repudiandae voluptate nostrum, debitis in nesciunt possimus velit aperiam tempore obcaecati explicabo veniam hic id ab, alias eligendi impedit libero enim numquam! Quasi, ut animi! Voluptatum vel cumque sit debitis. Distinctio, expedita! Esse accusantium repudiandae ab architecto reiciendis recusandae optio, ut accusamus, facilis laborum provident quos ratione modi sint temporibus similique mollitia inventore debitis animi vitae corrupti ducimus officiis nulla? Fugit officia culpa unde facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis veritatis numquam deleniti distinctio ad magnam aliquid blanditiis earum obcaecati ipsum natus, dolorum aperiam eius eligendi consequuntur. Asperiores numquam voluptates accusantium, dolorum deleniti perspiciatis? Deserunt repudiandae voluptate nostrum, debitis in nesciunt possimus velit aperiam tempore obcaecati explicabo veniam hic id ab, alias eligendi impedit libero enim numquam! Quasi, ut animi! Voluptatum vel cumque sit debitis. Distinctio, expedita! Esse accusantium repudiandae ab architecto reiciendis recusandae optio, ut accusamus, facilis laborum provident quos ratione modi sint temporibus similique mollitia inventore debitis animi vitae corrupti ducimus officiis nulla? Fugit officia culpa unde facere.
          </ModalSection>
        </v-dialog>
      </v-container>
    </section>
  </div>
</template>