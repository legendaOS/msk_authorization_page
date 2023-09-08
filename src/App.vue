<template>
  <div class="pay-auth">
    <menu-button />
    <template v-if="!isErrorVisible">
      <badge />
      <authorization-component />
    </template>
    <error-component v-else />
  </div>
</template>

<script>
import menuButton from "./components/menuButton.vue";
import badge from "./components/badge.vue";
import authorizationComponent from "./components/authorization.vue";
import errorComponent from "./components/error.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    menuButton,             //компонент верхушки с картинками и ссылками
    badge,                  //компонент с картинкой и кнопкой где это
    authorizationComponent, // компонент с полями авторизации
    errorComponent,         // компонент ошибки
  },
  computed: {
    ...mapGetters({
      isErrorVisible: "getVisible",
    }),
  },
};
</script>

<style>
.pay-auth {
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 20px;
  position: relative;
  background-color: #ffffff;
  border-radius: 16px;
  display: flex;
}
</style>
