<template>
  <div class="wrapper">
    <div class="snippet-summary">
      <div class="frame">
        <div class="frame-wrapper">
          <div class="div-wrapper">
            <div class="text-wrapper">Авторизация</div>
          </div>
        </div>
      </div>
    </div>

    <div class="div">
      <div class="frame-2">
        <input class="frame-3" v-model="login" />
        <div
          title="введите корректный адрес электронной почты"
          v-show="loginNotAccepted"
          class="arrow"
        >
          <img class="img" />
        </div>
      </div>
    </div>

    <div class="div">
      <div class="frame-2">
        <input class="frame-3" v-model="password" type="password" />
        <div v-show="passwordNotAccepted" :title="passErrors" class="arrow">
          <img class="img" />
        </div>
      </div>
    </div>

    <div v-show="incorrectLogin" class="text-incorrect">
      Некорректный логин и/или пароль
    </div>

    <div
      class="checkoutbuttonblack"
      :class="{ disable: isDisabled }"
      @click="submit"
    >
      <div class="text-wrapper-4">Войти</div>
    </div>

    <div class="parts-list-separator">
      <div class="line"></div>
      <div class="frame-5"><div class="text-wrapper-5">или</div></div>
    </div>

    <div class="parts-widget">
      <div class="badge-split">
        <div class="feature-2 point">
          <div class="text-2">Зарегистрироваться</div>
        </div>
      </div>
    </div>

    <div class="checkoutbuttonblack-2">
      <div class="brand-button"><div class="group"></div></div>
      <div class="text-wrapper-4">Войти с Яндекс ID</div>
      <div class="user"><div class="user-2"></div></div>
    </div>
    <p class="p">
      Нажимая на кнопку “Войти” вы соглашаетесь со всеми правилами посещения,
      оплаты, политиками обработки персональных данных и прочими
      бюрократическими документами
    </p>
  </div>
</template>

<script>
import validateEmail from "../tinyValidatros/loginValidator";
import validatePassword from "../tinyValidatros/passwordValidator";
import checkEnable from "../tinyValidatros/enableValidator";

import authorize from "../fakeAuthorization/login";

import { mapActions } from "vuex";

export default {
  name: "authorization-component",
  computed: {
    loginNotAccepted() {
      return !validateEmail(this.login);              // инверсия
    },
    passwordNotAccepted() {
      return validatePassword(this.password).length;  // инверсия
    },
    passErrors() {
      return validatePassword(this.password).toString();
    },
    isDisabled() {
      return checkEnable(this.password, this.login);  // состояние кнопки
    },
  },
  data: function () {
    return {
      login: "",
      password: "",
      incorrectLogin: false,
    };
  },
  methods: {
    ...mapActions({
      updateInfo: "authProfile",
      updateErrortext: "changeError",
      activeErrorComponent: "revertErrorComponent",
    }),
    async submit() {
      this.incorrectLogin = false;

      if (!this.isDisabled) {
        authorize(this.login, this.password)      // сделано через цепоку then catch
          .then((response) => {                   // можно было await
            if (response["_status"] == "OK") {    // статус кодов всего три
              this.auth(response);                // можно хранить как константы
            } else {
              this.not_aught();
            }
          })
          .catch((e) => {
            this.server_error(e);
          });
      }
    },

    clearFields() {
      this.password = "";   // зачистить введенные данные
      this.login = "";      
    },

    auth(info) {
      this.incorrectLogin = false;
      this.updateInfo({ login: info["_login"], secret: info["_key"] });
      this.clearFields();
    },

    not_aught() {
      this.clearFields();
      this.incorrectLogin = true; // убрать подсказку на неверный пароль\логин
    },

    server_error(e) {
      this.incorrectLogin = false;
      this.updateErrortext(e["_status"]);// можно делать асинхронно
      this.activeErrorComponent();       // но тогда ошибка может не успеть загрузиться в компонент
    },
  },
};
</script>

<style scoped>
.arrow {
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  background-image: url("../assets/shape.svg");
  background-repeat: no-repeat;
  background-position: center center;
}

input {
  border: 0;
  outline: 0;
}
input:focus {
  outline: none !important;
}

.disable {
  background-color: #ececec;
  cursor: not-allowed;
}

.group {
  width: 14px;
  height: 14px;
  background-image: url(../assets/28.svg);
  background-size: 100% 100%;
}

.user-2 {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-image: url(../assets/photo-2.png);
  background-size: cover;
  background-position: 50% 50%;
}

.checkoutbuttonblack-2 {
  cursor: pointer;
}
</style>