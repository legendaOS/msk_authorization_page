<template>
    <div class = "wrapper">
        <div class="snippet-summary">
          <div class="frame">
            <div class="frame-wrapper">
              <div class="div-wrapper"><div class="text-wrapper">Авторизация</div></div>
            </div>
          </div>
        </div>
        
        <div class="div">
          <div class="frame-2">
            <input class="frame-3" v-model="login"/>
                <div title = 'введите корректный адрес электронной почты' 
                    v-show="loginNotAccepted"
                    class="arrow"> 
                        <img class="img" src="img/edit-3.png" />
                </div>
          </div>
        </div>

        <div class="div">
          <div class="frame-2">
            <input class="frame-3" v-model="password" type = 'password'/>
            <div v-show="passwordNotAccepted" 
            :title = 'passErrors'
            class="arrow"><img class="img" src="img/edit-3.png" /></div>
          </div>
        </div>

        <div class="checkoutbuttonblack" :class="{ disable: isDisabled}">
            <div class="text-wrapper-4">Войти</div>
        </div>

        <div class="parts-list-separator">
          <div class="line"></div>
          <div class="frame-5"><div class="text-wrapper-5">или</div></div>
        </div>


        <div class="parts-widget">
          <div class="badge-split">
            <div class="feature-2 point"><div class="text-2">Зарегистрироваться</div></div>
          </div>
        </div>

    </div>
</template>

<script>

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validatePassword(p) {
    let errors = [];
    if (p.length < 8) {
        errors.push("пароль должен быть длиной не менее 8 символов"); 
    }
    if (p.search(/[a-z]/i) < 0) {
        errors.push(" в пароле должна быть хотя бы одна буква");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push(" в пароле должна быть хотя бы одна цифра"); 
    }
    return errors;
}

export default {
    name:'authorization-component',
    computed:{
        loginNotAccepted(){
            return !validateEmail(this.login)
        },
        passwordNotAccepted(){
            return validatePassword(this.password).length
        },
        passErrors(){
            return validatePassword(this.password).toString()
        },
        isDisabled(){
            return !(validatePassword(this.password).length == false && !validateEmail(this.login) == false)
        }
    },
    data: function(){
        return{
            login: '',
            password: ''
        }
    }
}
</script>

<style scoped>
.snippet-summary {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding: 24px 24px 5px 0px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
}

.frame {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
}

.frame-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  position: relative;
  flex: 1;
  flex-grow: 1;
}

.div-wrapper {
  display: inline-flex;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  flex: 0 0 auto;
}

.text-wrapper {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: "Suisse Intl-Bold", Helvetica;
  font-weight: 700;
  color: var(--textprimary);
  font-size: 28px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
}

.wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
}

.div {
  display: flex;
  width: 310px;
  height: 37px;
  align-items: center;
  gap: 4px;
  padding: 8px 12px 9px;
  position: relative;
  background-color: var(--background);
  border-radius: 12px;
  border: 1px solid;
  border-color: #e0e1e3;
}

.frame-2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex: 1;
  flex-grow: 1;
}

.frame-3 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 0 0 auto;
  background: transparent;
  border: none;
  width: 90%;
}

.text-wrapper-2 {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: "Suisse Intl-Regular", Helvetica;
  font-weight: 400;
  color: var(--text-100);
  font-size: 15px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.arrow {
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  background-image: url('../assets/shape.svg');
  background-repeat: no-repeat;
  background-position: center center;
}

.img {
  position: absolute;
  width: 10px;
  height: 6px;
  top: 58px;
  left: 69px;
}

input {border:0;outline:0;}
input:focus {outline:none!important;}

.checkoutbuttonblack {
  display: flex;
  height: 46px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  position: relative;
  align-self: stretch;
  width: 100%;
  background-color: #FF3815;
  border-radius: 16px;
  cursor: pointer;
}

.text-wrapper-4 {
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

.disable{
    background-color: #ECECEC;
    cursor: not-allowed;
}

.parts-list-separator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
}

.line {
  position: relative;
  flex: 1;
  flex-grow: 1;
  height: 1px;
  background-color: var(--linenormal);
}

.frame-5 {
  position: absolute;
  width: 57px;
  height: 22px;
  top: -12px;
  left: 126px;
  background-color: #ffffff;
}

.text-wrapper-5 {
  position: absolute;
  width: 57px;
  top: -1px;
  left: 0;
  font-family: "Suisse Intl-Medium", Helvetica;
  font-weight: 500;
  color: #d8dae4;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.parts-widget {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
}

.badge-split {
  flex: 1;
  flex-grow: 1;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.feature-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--x-borderdefault);
}

.text-2 {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: "Suisse Intl-Medium", Helvetica;
  font-weight: 500;
  color: var(--textsecondary);
  font-size: 14px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
}

</style>