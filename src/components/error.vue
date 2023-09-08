<template>
  <img class="vector-err" src="../assets/vector.svg" />
  <p class="text-err">
    <span class="text-wrapper-err"
      >Сейчас в интернете не принято писать <br />ошибку, но мы чтим традиции<br
    /></span>
    <span class="span-err">Произошла ошибка {{ errorText }}</span>
  </p>
  <div class="checkoutbuttonblack-err" @click="reverting">
    <div class="div-err">Перезагрузить окно</div>
  </div>
  <p class="p-err">
    Если после перезагрузки окна вы продолжите видеть это сообщение. То у нас
    что-то сломалось и скоро мы все починим.
  </p>
  <p class="p-err">А пока можете полюбоваться видами выставки</p>
  <div class="checkoutbuttonblack-2-err">
    <div class="text-wrapper-2-err">Смотреть красивые виды ВДНХ</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "error-component",
  computed: {
    ...mapGetters({
      errorText: "getErrText",            // отображение статуса ошибки
    }),
  },
  methods: {
    ...mapActions({
      reverting: "revertErrorComponent",  // переключиться на компонент аторизации
                                          // так как это action его можно делать асинхронным
                                          // например загрузить логи на сервер
    }),
  },
};
</script>

<style scoped>
.vector-err {
  position: relative;
  width: 66px;
  height: 72px;
}

.text-err {
  font-family: "Suisse Intl-Medium", Helvetica;
  position: relative;
  width: 275px;
  font-weight: 400;
  color: var(--textsecondary);
  font-size: 14px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.text-wrapper-err {
  font-weight: 500;
}

.span-err {
  font-family: "Suisse Intl-Bold", Helvetica;
  font-weight: 700;
}

.p-err {
  font-family: "Suisse Intl", Helvetica;
  position: relative;
  width: 275px;
  font-weight: 400;
  color: var(--textsecondary);
  font-size: 14px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.checkoutbuttonblack-err {
  display: flex;
  height: 46px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  position: relative;
  align-self: stretch;
  width: 100%;
  background-color: #ff3815;
  border-radius: 16px;
  cursor: pointer;
  text-align: center;
}

.div-err {
  margin-top: -1px;
  font-size: 18px;
  line-height: 22px;
  position: relative;
  width: fit-content;
  font-family: "Suisse Intl-Medium", Helvetica;
  font-weight: 500;
  color: var(--x-staticwhite);
  text-align: center;
  letter-spacing: 0;
  white-space: nowrap;
}

.checkoutbuttonblack-2-err {
  display: flex;
  height: 46px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  position: relative;
  align-self: stretch;
  width: 100%;
  background-color: var(--x-staticblack);
  border-radius: 16px;
  cursor: pointer;
}

.text-wrapper-2-err {
  font-size: 12px;
  line-height: 14px;
  position: relative;
  width: fit-content;
  font-family: "Suisse Intl-Medium", Helvetica;
  font-weight: 500;
  color: var(--x-staticwhite);
  text-align: center;
  letter-spacing: 0;
  white-space: nowrap;
}
</style>